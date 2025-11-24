package br.com.webdois.backend_web_api.dtos;

import br.com.webdois.backend_web_api.entity.EstadoChamado;

public class SolicitacaoDTO {
    private String descricao;
    private EstadoChamado estadoChamado;
    private Long usuarioId;
    private Long categoriaId;
    private String descricaoEquipamentos;


    public Long getCategoriaId() {
        return this.categoriaId;
    }

    public void setCategoriaId(Long categoriaId) {
        this.categoriaId = categoriaId;
    }

    public String getDescricaoEquipamentos() {
        return this.descricaoEquipamentos;
    }

    public void setDescricaoEquipamentos(String descricaoEquipamentos) {
        this.descricaoEquipamentos = descricaoEquipamentos;
    }


    public String getDescricao() {
        return this.descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public EstadoChamado getEstadoChamado() {
        return this.estadoChamado;
    }

    public void setEstadoChamado(EstadoChamado estadoChamado) {
        this.estadoChamado = estadoChamado;
    }

    public Long getUsuarioId() {
        return this.usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

}
