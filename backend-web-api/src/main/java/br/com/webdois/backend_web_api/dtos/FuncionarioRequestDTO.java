package br.com.webdois.backend_web_api.dtos;

import java.time.LocalDate;

public class FuncionarioRequestDTO {
    private String email;
    private String nome;
    private LocalDate dataNascimento;
    private String senha;

    public FuncionarioRequestDTO() {}

    public FuncionarioRequestDTO(String email, String nome, LocalDate dataNascimento, String senha) {
        this.email = email;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.senha = senha;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}

