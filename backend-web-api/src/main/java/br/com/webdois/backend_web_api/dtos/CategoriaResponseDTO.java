package br.com.webdois.backend_web_api.dtos;

public class CategoriaResponseDTO {
    private Long id;
    private String nomeCategoria;
    private Boolean ativo;

    public CategoriaResponseDTO(Long id, String nomeCategoria, Boolean ativo) {
        this.id = id;
        this.nomeCategoria = nomeCategoria;
        this.ativo = ativo;
    }

    public Long getId() {
        return this.id;
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

    public void setId(Long id) {
        this.id = id;
    }

}
