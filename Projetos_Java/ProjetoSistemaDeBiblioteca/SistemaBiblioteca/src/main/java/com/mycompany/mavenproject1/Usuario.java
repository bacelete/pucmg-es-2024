/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.mavenproject1;
import java.util.List; 
import java.util.ArrayList; 
/**
 *
 * @author Arthur Bacelete
 */
public class Usuario {
    private String nome; 
    private int id_user; 
    private int limite_emprestimo; 
    private List<Livro> livros; 
    
    public Usuario(String nome, int id_user, int limite_emprestimo) {
        this.nome = nome; 
        this.id_user = id_user; 
        this.limite_emprestimo = limite_emprestimo; 
        this.livros = new ArrayList<>(); 
    }
    
    public void realizarEmprestimo(Livro livro) {
        if (livro.getCopias() > 0 && this.limite_emprestimo > 0) {
            this.livros.add(livro);
            this.limite_emprestimo--;
            livro.emprestar(); 
        }
    }
    
    public void devolverLivro(Livro livro) {
        livro.devolver(); 
        this.limite_emprestimo++; 
    }
    
    public String getNome() {
        return this.nome; 
    }
    
    public int getId() {
        return this.id_user; 
    }
    
    public List<Livro> getLivro() {
        return this.livros; 
    }
    
    
}
