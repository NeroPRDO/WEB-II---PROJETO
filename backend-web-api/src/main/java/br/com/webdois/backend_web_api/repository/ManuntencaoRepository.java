package br.com.webdois.backend_web_api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.webdois.backend_web_api.entity.Manuntencao;

public interface ManuntencaoRepository extends JpaRepository<Manuntencao, Long> {
    Optional<Manuntencao> findById(Long id_manutencao);

    @Query("SELECT m FROM Manuntencao m WHERE m.solicitacao.id = :idSolicitacao")
    Optional<Manuntencao> findBySolicitacaoId(@Param("idSolicitacao") Long idSolicitacao);
}