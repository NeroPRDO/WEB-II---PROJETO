package br.com.webdois.backend_web_api.dtos;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RegisterRequestDTO {

    private String nome;
    private String email;
    private String cpf;
    private LocalDate  dataNascimento;
    private String telefone;
    private String cep;
    private String logradouro;
    private String numero;
    private String complemento;
    private String bairro;
    private String cidade;
    private String estado;
}
