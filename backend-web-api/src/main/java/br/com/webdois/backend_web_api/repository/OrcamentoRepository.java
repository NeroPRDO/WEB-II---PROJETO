package br.com.webdois.backend_web_api.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.webdois.backend_web_api.entity.Orcamento;

public interface OrcamentoRepository extends JpaRepository<Orcamento, Long> {
    List<Orcamento> findByUsuarioId(Long usuarioId);
}
