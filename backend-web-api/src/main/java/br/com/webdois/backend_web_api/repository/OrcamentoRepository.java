package br.com.webdois.backend_web_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.webdois.backend_web_api.entity.Orcamento;

public interface OrcamentoRepository extends JpaRepository<Orcamento, Long> {
    
}
