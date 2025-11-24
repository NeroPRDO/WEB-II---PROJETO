package br.com.webdois.backend_web_api.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "pagamento")
public class Pagamento {
    @Id
    @GeneratedValue
    private Long id_pagamento;


    @ManyToOne
    @JoinColumn(name = "idf_solicitacao")
    private Solicitacao solicitacao;

    private LocalDateTime data_pagamento;

    @Column(precision = 10, scale = 2)
    private BigDecimal valorPago;


    public Long getId_pagamento() {
        return this.id_pagamento;
    }

    public void setId_pagamento(Long id_pagamento) {
        this.id_pagamento = id_pagamento;
    }
    
    public Solicitacao getSolicitacao() {
        return this.solicitacao;
    }

    public void setSolicitacao(Solicitacao solicitacao) {
        this.solicitacao = solicitacao;
    }

    public LocalDateTime getData_pagamento() {
        return this.data_pagamento;
    }

    public void setData_pagamento(LocalDateTime data_pagamento) {
        this.data_pagamento = data_pagamento;
    }

    public BigDecimal getValorPago() {
        return this.valorPago;
    }

    public void setValorPago(BigDecimal valorPago) {
        this.valorPago = valorPago;
    }

}
