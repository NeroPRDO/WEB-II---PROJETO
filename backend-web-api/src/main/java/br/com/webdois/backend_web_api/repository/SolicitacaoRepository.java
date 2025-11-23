package br.com.webdois.backend_web_api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.webdois.backend_web_api.entity.Solicitacao;

public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Long> {
    List<Solicitacao> findByUsuarioId(Long usuarioId);
}
