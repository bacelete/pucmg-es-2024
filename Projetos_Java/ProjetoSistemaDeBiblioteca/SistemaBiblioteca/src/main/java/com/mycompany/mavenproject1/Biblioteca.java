package com.mycompany.mavenproject1;
import java.util.List; 
import java.util.ArrayList; 
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Arthur Bacelete
 */
public class Biblioteca {     
    private List<Livro> livros;   
    private List<Usuario> usuarios; 
    
    public Biblioteca() {
        this.livros = new ArrayList<>(); 
        this.usuarios = new ArrayList<>(); 
    }
    
    public boolean cadastrarLivro(Livro livro) {         
        this.livros.add(livro);     
        return true; 
    }  
    
    public boolean cadastrarUsuario(Usuario usuario) {
        this.usuarios.add(usuario); 
        return true;
    }
    
    public String gerarRelatorioLivros() {
        String relatorio = "";
        for (Livro livro : livros) {
            relatorio = "\nTitulo: "+livro.getTitulo()+", Autor: "+livro.getAutor()+", Copias disponiveis: "+livro.getCopias() + "\n" + relatorio;
        }
        return relatorio;
    }
    
    public String gerarRelatorioUsuarioLivro() {
        String relatorio = ""; 
        for (Usuario usuario : usuarios) {
            for (Livro livro : usuario.getLivro()) {
                relatorio = "\n\nEstudante: "+usuario.getNome()+"\nID: "+usuario.getId()+
                            "\nLivro: "+livro.getTitulo()+"\nAutor: "+livro.getAutor()
                            + relatorio;
            }
        }
        return relatorio; 
    }
    
} 