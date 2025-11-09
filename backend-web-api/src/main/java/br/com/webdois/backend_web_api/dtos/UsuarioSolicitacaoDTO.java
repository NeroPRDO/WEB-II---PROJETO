package br.com.webdois.backend_web_api.dtos;

import br.com.webdois.backend_web_api.entity.Usuario;

public class UsuarioSolicitacaoDTO {
    private Long id;
    private String nome;
    private String email;

    public UsuarioSolicitacaoDTO(Usuario usuario) {
        this.id = usuario.getId();
        this.nome = usuario.getNome();
        this.email = usuario.getEmail();
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
