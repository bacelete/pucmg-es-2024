/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.practice;

import java.util.List;
import java.util.ArrayList;
/**
 *
 * @author nanda
 */
public class Armazem {
    private List<Produto> produtos; 
    private static final int QTD_MIN = 5; 
    
    public Armazem() {
        produtos = new ArrayList<>(); 
    }
    
    public void addProduto(Produto produto) {
        this.produtos.add(produto); 
    }
    
    public boolean verificarEstoqueBaixo() {
        if (Produto.getTotalProdutos() < QTD_MIN) {
            return true;
        }
        return false; 
    }
    
    public Produto getProduto(String nome) {
        for (Produto p : produtos) {
            if (p.getNome().equals(nome)) {
                return p;
            }
        }
        return null; 
    }
}
