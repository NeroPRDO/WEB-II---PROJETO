package br.com.webdois.backend_web_api.dtos;

import java.math.BigDecimal;

public class OrcamentoRequestDTO {
    private Long solicitaoId;
    private Long usuarioId;
    private Long funcionarioId;
    private String desc_Solicitacao;
    private BigDecimal valorOrcamento;

    public BigDecimal getValorOrcamento() {
        return this.valorOrcamento;
    }

    public void setValorOrcamento(BigDecimal valorOrcamento) {
        this.valorOrcamento = valorOrcamento;
    }


    public Long getSolicitaoId() {
        return this.solicitaoId;
    }

    public void setSolicitaoId(Long solicitaoId) {
        this.solicitaoId = solicitaoId;
    }

    public Long getUsuarioId() {
        return this.usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Long getFuncionarioId() {
        return this.funcionarioId;
    }

    public void setFuncionarioId(Long funcionarioId) {
        this.funcionarioId = funcionarioId;
    }

    public String getDesc_Solicitacao() {
        return this.desc_Solicitacao;
    }

    public void setDesc_Solicitacao(String desc_Solicitacao) {
        this.desc_Solicitacao = desc_Solicitacao;
    }

}
