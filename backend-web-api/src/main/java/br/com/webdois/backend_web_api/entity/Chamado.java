package br.com.webdois.backend_web_api.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;

@Entity
@Table(name = "chamado")
public class Chamado {
    @Id
    @GeneratedValue
    private Long id;
    private Long idUsuario;
    private Long idAcesso;
    private Long idFuncionarioResponsavel;
    private String nomeUsuario;
    private Long idEquipamento;
    private Double valorOrcamento;
    @Enumerated(EnumType.STRING)
    private EstadoChamado estadoChamado;
    private LocalDateTime dataInicio;
    private LocalDateTime dataFim;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public Long getIdAcesso() {
        return idAcesso;
    }

    public void setIdAcesso(Long idAcesso) {
        this.idAcesso = idAcesso;
    }

    public Long getIdFuncionarioResponsavel() {
        return idFuncionarioResponsavel;
    }

    public void setIdFuncionarioResponsavel(Long idFuncionarioResponsavel) {
        this.idFuncionarioResponsavel = idFuncionarioResponsavel;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public Long getIdEquipamento() {
        return idEquipamento;
    }

    public void setIdEquipamento(Long idEquipamento) {
        this.idEquipamento = idEquipamento;
    }

    public Double getValorOrcamento() {
        return valorOrcamento;
    }

    public void setValorOrcamento(Double valorOrcamento) {
        this.valorOrcamento = valorOrcamento;
    }

    public EstadoChamado getEstadoChamado() {
        return estadoChamado;
    }

    public void setEstadoChamado(EstadoChamado estadoChamado) {
        this.estadoChamado = estadoChamado;
    }

    public LocalDateTime getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(LocalDateTime dataInicio) {
        this.dataInicio = dataInicio;
    }

    public LocalDateTime getDataFim() {
        return dataFim;
    }

    public void setDataFim(LocalDateTime dataFim) {
        this.dataFim = dataFim;
    }
}