package br.com.webdois.backend_web_api.dtos;

public class CategoriaRequestDTO {
    private String nomeCategoria;
    private Boolean ativo;

    public CategoriaRequestDTO(String nomeCategoria, Boolean ativo) {
        this.nomeCategoria = nomeCategoria;
        this.ativo = ativo;
    }

    public String getNomeCategoria() {
        return this.nomeCategoria;
    }

    public Boolean isAtivo() {
        return this.ativo;
    }

    public void setNomeCategoria(String nomeCategoria) {
        this.nomeCategoria = nomeCategoria;
    }

    public void setAtivo(Boolean ativo) {
        this.ativo = ativo;
    }

}
