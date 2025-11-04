package br.com.webdois.backend_web_api.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "categoria")
public class Categoria {
    @Id
    @GeneratedValue
    private Long id;
    private String displayName;
    private Boolean active;

    public Long getId() {
        return this.id;
    }

    public String getDisplayName() {
        return this.displayName;
    }

    public Boolean isActive() {
        return this.active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
