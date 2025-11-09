package br.com.webdois.backend_web_api.dtos;

import br.com.webdois.backend_web_api.entity.EstadoChamado;

public class SolicitacaoDTO {
    private String descricao;
    private EstadoChamado estadoChamado;
    private Long usuarioId;


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
