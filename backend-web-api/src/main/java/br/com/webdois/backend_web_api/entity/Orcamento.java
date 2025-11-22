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
@Table(name = "orcamento")
public class Orcamento {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "idf-usuario")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "idf-funcionario")
    private Usuario funcionario;

    @ManyToOne
    @JoinColumn(name = "idf-solicitacao")
    private Solicitacao solicitacao;

    private String desc_Solicitacao;

    private LocalDateTime data_orcamento;

    @Column(precision = 10, scale = 2)
    private BigDecimal valorOrcamento;

    public BigDecimal getValorOrcamento() {
        return this.valorOrcamento;
    }

    public void setValorOrcamento(BigDecimal valorOrcamento) {
        this.valorOrcamento = valorOrcamento;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return this.usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Usuario getFuncionario() {
        return this.funcionario;
    }

    public void setFuncionario(Usuario funcionario) {
        this.funcionario = funcionario;
    }

    public Solicitacao getSolicitacao() {
        return this.solicitacao;
    }

    public void setSolicitacao(Solicitacao solicitacao) {
        this.solicitacao = solicitacao;
    }

    public String getDesc_Solicitacao() {
        return this.desc_Solicitacao;
    }

    public void setDesc_Solicitacao(String desc_Solicitacao) {
        this.desc_Solicitacao = desc_Solicitacao;
    }

    public LocalDateTime getData_orcamento() {
        return this.data_orcamento;
    }

    public void setData_orcamento(LocalDateTime data_orcamento) {
        this.data_orcamento = data_orcamento;
    }


}
