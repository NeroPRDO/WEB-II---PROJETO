package br.com.webdois.backend_web_api.dtos;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class PagamentoRequestDTO {

    private Long idf_solicitacao;
    private BigDecimal valorPago;

    public PagamentoRequestDTO() {
    }

    public PagamentoRequestDTO(Long idf_usuario, Long idf_solicitacao, LocalDateTime data_pagamento, BigDecimal valorPago) {
        this.idf_solicitacao = idf_solicitacao;
        this.valorPago = valorPago;
    }

    public Long getIdf_solicitacao() {
        return idf_solicitacao;
    }

    public void setIdf_solicitacao(Long idf_solicitacao) {
        this.idf_solicitacao = idf_solicitacao;
    }
    public BigDecimal getValorPago() {
        return valorPago;
    }

    public void setValorPago(BigDecimal valorPago) {
        this.valorPago = valorPago;
    }
}
