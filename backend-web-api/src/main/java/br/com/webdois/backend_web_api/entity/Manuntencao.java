package br.com.webdois.backend_web_api.entity;

import java.time.LocalDateTime;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "manuntecao")
public class Manuntencao {
    @Id
    @GeneratedValue
    private Long id_manutencao;

    @ManyToOne
    @JoinColumn(name = "idf-funcionario")
    private Usuario idf_funcionarioAtual;


    @ManyToOne
    @JoinColumn(name = "idf_solicitacao")
    private Solicitacao solicitacao;

    private LocalDateTime dataHora;

    private Boolean finalizada;

    private LocalDateTime dataHoraFinalizacao;

    private String descricacaoManuntencao;

    private String orientacao;

    public String getDescricacaoManuntencao() {
        return this.descricacaoManuntencao;
    }

    public void setDescricacaoManuntencao(String descricacaoManuntencao) {
        this.descricacaoManuntencao = descricacaoManuntencao;
    }

    public String getOrientacao() {
        return this.orientacao;
    }

    public void setOrientacao(String orientacao) {
        this.orientacao = orientacao;
    }

    public Boolean isFinalizada() {
        return this.finalizada;
    }

    public Boolean getFinalizada() {
        return this.finalizada;
    }

    public void setFinalizada(Boolean finalizada) {
        this.finalizada = finalizada;
    }

    public LocalDateTime getDataHoraFinalizacao() {
        return this.dataHoraFinalizacao;
    }

    public void setDataHoraFinalizacao(LocalDateTime dataHoraFinalizacao) {
        this.dataHoraFinalizacao = dataHoraFinalizacao;
    }


    public Solicitacao getSolicitacao() {
        return this.solicitacao;
    }

    public void setSolicitacao(Solicitacao solicitacao) {
        this.solicitacao = solicitacao;
    }



    public Long getId_manutencao() {
        return this.id_manutencao;
    }

    public void setId_manutencao(Long id_manutencao) {
        this.id_manutencao = id_manutencao;
    }

    public Usuario getIdf_funcionarioAtual() {
        return this.idf_funcionarioAtual;
    }

    public void setIdf_funcionarioAtual(Usuario idf_funcionarioAtual) {
        this.idf_funcionarioAtual = idf_funcionarioAtual;
    }

    public LocalDateTime getDataHora() {
        return this.dataHora;
    }

    public void setDataHora(LocalDateTime dataHora) {
        this.dataHora = dataHora;
    }



}
