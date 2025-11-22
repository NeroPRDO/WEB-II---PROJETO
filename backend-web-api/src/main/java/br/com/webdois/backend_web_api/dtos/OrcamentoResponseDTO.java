package br.com.webdois.backend_web_api.dtos;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import br.com.webdois.backend_web_api.entity.EstadoOrcamento;

public class OrcamentoResponseDTO {
    private Long idOrcamento; // id do orçamento

    private Long usuarioId;
    private String usuarioNome;

    private Long solicitacaoId;

    private Long funcionarioId;
    private String funcionarioNome;

    private String descSolicitacao;
    private LocalDateTime dataOrcamento;
    private BigDecimal valorOrcamento;

    private EstadoOrcamento estadoOrcamento;

    public EstadoOrcamento getEstadoOrcamento() {
        return this.estadoOrcamento;
    }

    public void setEstadoOrcamento(EstadoOrcamento estadoOrcamento) {
        this.estadoOrcamento = estadoOrcamento;
    }


    public Long getIdOrcamento() {
        return this.idOrcamento;
    }

    public void setIdOrcamento(Long idOrcamento) {
        this.idOrcamento = idOrcamento;
    }

    public Long getSolicitacaoId() {
        return this.solicitacaoId;
    }

    public void setSolicitacaoId(Long solicitacaoId) {
        this.solicitacaoId = solicitacaoId;
    }


    public Long getUsuarioId() {
        return this.usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public String getUsuarioNome() {
        return this.usuarioNome;
    }

    public void setUsuarioNome(String usuarioNome) {
        this.usuarioNome = usuarioNome;
    }

    public Long getFuncionarioId() {
        return this.funcionarioId;
    }

    public void setFuncionarioId(Long funcionarioId) {
        this.funcionarioId = funcionarioId;
    }

    public String getFuncionarioNome() {
        return this.funcionarioNome;
    }

    public void setFuncionarioNome(String funcionarioNome) {
        this.funcionarioNome = funcionarioNome;
    }

    public String getDescSolicitacao() {
        return this.descSolicitacao;
    }

    public void setDescSolicitacao(String descSolicitacao) {
        this.descSolicitacao = descSolicitacao;
    }

    public LocalDateTime getDataOrcamento() {
        return this.dataOrcamento;
    }

    public void setDataOrcamento(LocalDateTime dataOrcamento) {
        this.dataOrcamento = dataOrcamento;
    }


    public BigDecimal getValorOrcamento() {
        return this.valorOrcamento;
    }

    public void setValorOrcamento(BigDecimal valorOrcamento) {
        this.valorOrcamento = valorOrcamento;
    }

}
