/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.practice;

/**
 *
 * @author nanda
 */
public class Practice {

    public static void main(String[] args) {
        Armazem armazem = new Armazem(); 
        
        Data dataVal_1 = new Data(31,12,2024);
        Data dataVal_2 = new Data(7, 9, 2024); 
        
        Data dataAtual = new Data(7, 11, 2024); 
        
        Produto p = new Perecivel("Coca-cola", 8.00, 10, "Alimenticio", dataVal_1); 
        Produto q = new Perecivel("Frango", 15.00, 1, "Alimenticio", dataVal_2); 
        
        armazem.addProduto(p); 
        armazem.addProduto(q); 
        
        p.verificarValidade(dataAtual); 
        
        
    }
}
