package br.com.webdois.backend_web_api.dtos;

import java.time.LocalDateTime;

public class SolicitacaoResponseDTO {
    private Long id;
    private LocalDateTime dataHora;
    private String descricao;
    private String estadoChamado;
    private UsuarioSolicitacaoDTO usuario;

    public SolicitacaoResponseDTO(Long id, LocalDateTime dataHora, String descricao, String estadoChamado, UsuarioSolicitacaoDTO usuario) {
        this.id = id;
        this.dataHora = dataHora;
        this.descricao = descricao;
        this.estadoChamado = estadoChamado;
        this.usuario = usuario;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDataHora() {
        return this.dataHora;
    }

    public void setDataHora(LocalDateTime dataHora) {
        this.dataHora = dataHora;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getEstadoChamado() {
        return this.estadoChamado;
    }

    public void setEstadoChamado(String estadoChamado) {
        this.estadoChamado = estadoChamado;
    }

    public UsuarioSolicitacaoDTO getUsuario() {
        return this.usuario;
    }

    public void setUsuario(UsuarioSolicitacaoDTO usuario) {
        this.usuario = usuario;
    }

}
