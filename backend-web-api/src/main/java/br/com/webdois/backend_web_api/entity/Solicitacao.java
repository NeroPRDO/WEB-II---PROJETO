package br.com.webdois.backend_web_api.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Solicitacoes")
public class Solicitacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime dataHora;

    private String descricao;

    private String descricao_equipamentos;

    @Enumerated(EnumType.STRING)
    private EstadoChamado estadoChamado;
    
    @ManyToOne
    @JoinColumn(name = "idf-usuario")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "idf-categoria")
    private Categoria categoria;

    public Categoria getCategoria() {
        return this.categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
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

    public EstadoChamado getEstadoChamado() {
        return this.estadoChamado;
    }

    public void setEstadoChamado(EstadoChamado estadoChamado) {
        this.estadoChamado = estadoChamado;
    }

    public Usuario getUsuario() {
        return this.usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getDescricao_equipamentos() {
        return this.descricao_equipamentos;
    }

    public void setDescricao_equipamentos(String descricao_equipamentos) {
        this.descricao_equipamentos = descricao_equipamentos;
    }

}
