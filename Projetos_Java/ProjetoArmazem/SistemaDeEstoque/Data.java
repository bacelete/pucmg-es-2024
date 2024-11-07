/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.practice;

/**
 *
 * @author nanda
 */
public class Data {
    private int dia;
    private int mes;
    private int ano;

    // Construtor que valida e inicializa a data
    public Data(int dia, int mes, int ano) {
        if (isDataValida(dia, mes, ano)) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        } else {
            throw new IllegalArgumentException("Data inválida");
        }
    }

    // Método para verificar se a data é válida
    private boolean isDataValida(int dia, int mes, int ano) {
        if (mes < 1 || mes > 12) return false;
        if (dia < 1 || dia > diasNoMes(mes, ano)) return false;
        return true;
    }

    // Método auxiliar que retorna o número de dias em um mês, considerando anos bissextos
    private int diasNoMes(int mes, int ano) {
        switch (mes) {
            case 4: case 6: case 9: case 11:
                return 30;
            case 2:
                return (isAnoBissexto(ano)) ? 29 : 28;
            default:
                return 31;
        }
    }

    // Método para verificar se um ano é bissexto
    private boolean isAnoBissexto(int ano) {
        return (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);
    }

    // Método para avançar a data em um determinado número de dias
    public void avancarDias(int dias) {
        while (dias > 0) {
            int diasRestantesNoMes = diasNoMes(this.mes, this.ano) - this.dia;
            if (dias <= diasRestantesNoMes) {
                this.dia += dias;
                break;
            } else {
                dias -= (diasRestantesNoMes + 1);
                this.dia = 1;
                if (this.mes == 12) {
                    this.mes = 1;
                    this.ano++;
                } else {
                    this.mes++;
                }
            }
        }
    }

    // Método para comparar a data atual com outra data
    public int compararData(Data outraData) {
        if (this.ano < outraData.ano) return -1;
        if (this.ano > outraData.ano) return 1;
        if (this.mes < outraData.mes) return -1;
        if (this.mes > outraData.mes) return 1;
        if (this.dia < outraData.dia) return -1;
        if (this.dia > outraData.dia) return 1;
        return 0;
    }

    // Método para formatar a data no formato "dd/MM/yyyy"
    public String formatarData() {
        return String.format("%02d/%02d/%04d", dia, mes, ano);
    }

    // Getters para acessar dia, mes e ano
    public int getDia() { return dia; }
    public int getMes() { return mes; }
    public int getAno() { return ano; }
    
}