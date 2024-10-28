/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.contabancaria;

/**
 *
 * @author nanda
 */
public class ContaBancaria {

    public static void main(String[] args) {
        Cliente arthur = new Cliente("15910476688"); 
        Conta conta = new Conta("12345", arthur, 500, 100);
        
        conta.sacar(600);
        System.out.println("Saldo da conta: "+conta.getSaldo());
        conta.depositar(200);
        System.out.println("Saldo da conta: "+conta.getSaldo());
        
    }
}
