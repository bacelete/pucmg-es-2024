/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.practice;

/**
 *
 * @author nanda
 */
public abstract class Produto {
    protected String nome; 
    protected double preco; 
    protected int quantidade;
    protected String categoria; 
    private static int totalProdutos; 
    
    public Produto(String nome, double preco, int quantidade, String categoria) {
        this.nome = nome; 
        this.preco = preco; 
        this.quantidade = quantidade;
        this.categoria = categoria; 
        totalProdutos++; 
    }
    
    public void exibirInfo() {
        System.out.println("Nome: "+this.nome);
        System.out.println("Preco: R$"+this.preco);
        System.out.println("Quantidade: "+this.quantidade);
        System.out.println("Categoria: "+this.categoria);
    }
    
    
    
    
    
}
