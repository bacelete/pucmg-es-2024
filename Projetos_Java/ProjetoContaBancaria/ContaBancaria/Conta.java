/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.contabancaria;

/**
 *
 * @author nanda
 */
public class Conta {
    private Cliente cliente; 
    private String id_conta; 
    private double limite; 
    private double saldo; 
    private static final double TAXA = 0.03; 
    
    public Conta(String id_conta, Cliente cliente, double saldo, double limite) { //200, 100; 
        this.id_conta = id_conta;
        this.cliente = cliente; 
        this.saldo = saldo; 
        this.limite = limite; 
    }
    
    public void sacar(double valor) { 
        if (valor <= this.saldo + this.limite) {
            this.saldo-=valor; 
        }
    }
    
    public void depositar(double valor) { 
        if (this.saldo < 0) {
            valor = valor - (TAXA * Math.abs(this.saldo)); 
        }
        this.saldo+=valor; 
    }
    
    public double getSaldo() {
        return this.saldo;
    }
    
}
