/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.mavenproject1;

/**
 *
 * @author Arthur Bacelete
 */
public class Mavenproject1 {

    public static void main(String[] args) {
        Biblioteca biblioteca = new Biblioteca(); 
        
        //Cria os modelos: 
        Livro livro = new Livro("Depois de Aushwitchz", "Eva Schloss", 2);
        Livro livro2 = new Livro("Vidas Secas", "Graciliano Ramos", 1); 
        
        Usuario usuario = new Usuario("Arthur Bacelete", 1, 5); 
        Usuario ana = new Usuario("Ana Bacelete", 2, 4); 
        
        //Tarefa de cadastrar usuario e livro na biblioteca: 
        biblioteca.cadastrarUsuario(usuario); 
        biblioteca.cadastrarUsuario(ana); 
        biblioteca.cadastrarLivro(livro); 
        
        //Tarefa de realizar emprestimo de livro; 
        usuario.realizarEmprestimo(livro);
        ana.realizarEmprestimo(livro2);
        
        System.out.println(biblioteca.gerarRelatorioUsuarioLivro());
        System.out.println(biblioteca.gerarRelatorioLivros());
        
        
    }
}
