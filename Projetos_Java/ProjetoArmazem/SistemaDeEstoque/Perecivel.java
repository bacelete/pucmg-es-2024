/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.practice;

/**
 *
 * @author nanda
 */
public class Perecivel extends Produto{
    private Data dataValidade;
    
    public Perecivel(String nome, double preco, int quantidade, String categoria, Data dataValidade) {
        super(nome, preco, quantidade, categoria); 
        this.dataValidade = dataValidade; 
    }
    
    @Override
    public void exibirInfo() {
        super.exibirInfo(); 
        System.out.println("Data de validade: "+this.dataValidade);
    }
    
    public boolean verificarValidade(Data data) {
        if (data.getAno() < dataValidade.getAno()) {
            return true;
        }
        else if (data.getMes() < dataValidade.getMes() && data.getAno() == dataValidade.getAno()) {
            return true; 
        }
        else if(data.getDia() < dataValidade.getDia() && data.getMes() == dataValidade.getMes() && data.getAno() == dataValidade.getAno()) {
            return true; 
        }
        else {
            aplicarDesconto(); 
            return false;
        }
    }
    
    public void aplicarDesconto() {
        this.preco = this.preco * 0.3; //Desconto de 70%. 
    }
    
    
}
