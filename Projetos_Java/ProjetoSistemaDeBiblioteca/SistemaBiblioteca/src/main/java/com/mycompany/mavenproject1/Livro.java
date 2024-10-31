/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.mavenproject1;

/**
 *
 * @author Arthur Bacelete
 */
public class Livro {
    private String titulo; 
    private String autor;
    private int copias;
    private int id_livro; 
    private static int lastId;
    
    public Livro(String titulo, String autor, int copias) {
        this.titulo = titulo; 
        this.autor = autor; 
        this.copias = copias; 
        lastId++; 
        this.id_livro = lastId; 
    }
    
    public void emprestar() {
        if (this.copias > 0) {
            this.copias--; 
        }
    }
    
    public void devolver() {
        this.copias++; 
    }
    
    public int getCopias() {
        return this.copias; 
    }
    
    public String getTitulo() {
        return this.titulo;
    }
    
    public String getAutor() {
        return this.autor; 
    }
    
        
}
