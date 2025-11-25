package br.com.webdois.backend_web_api.repository;

import br.com.webdois.backend_web_api.dtos.ReceitaPorCategoria;
import br.com.webdois.backend_web_api.dtos.ReceitaPorDia;
import br.com.webdois.backend_web_api.entity.Chamado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface ChamadoRepository extends JpaRepository<Chamado, Long> {

  /**
   * Relatório de receitas por dia, somando o que foi REALMENTE pago.
   * Base: tabela PAGAMENTO (valor_pago) + SOLICITACOES (estado / categoria).
   *
   * Filtra por intervalo de data de pagamento (data_pagamento BETWEEN :inicio AND
   * :fim)
   * e considera somente solicitações com estado PAGA ou FINALIZADA.
   */
  @Query(value = """
      SELECT
          DATE(p.data_pagamento) AS dia,
          COALESCE(SUM(p.valor_pago), 0) AS total
      FROM pagamento p
      JOIN solicitacoes s ON s.id = p.idf_solicitacao
      WHERE p.data_pagamento BETWEEN :inicio AND :fim
        AND s.estado_chamado IN ('PAGA', 'FINALIZADA')
      GROUP BY DATE(p.data_pagamento)
      ORDER BY dia
      """, nativeQuery = true)
  List<ReceitaPorDia> receitasPorDia(
      @Param("inicio") LocalDateTime inicio,
      @Param("fim") LocalDateTime fim);

  /**
   * Relatório de receitas por categoria,
   * somando o que foi pago nas solicitações PAGA / FINALIZADA
   * agrupado pela categoria da solicitação.
   *
   * Relações:
   * pagamento.idf_solicitacao -> solicitacoes.id
   * solicitacoes."idf-categoria" -> categoria.id
   */
  @Query(value = """
      SELECT
          cat.id                AS categoriaId,
          cat.nome_categoria    AS categoriaNome,
          COALESCE(SUM(p.valor_pago), 0) AS total
      FROM pagamento      p
      JOIN solicitacoes   s   ON s.id       = p.idf_solicitacao
      JOIN categoria      cat ON cat.id     = s."idf-categoria"
      WHERE p.data_pagamento BETWEEN :inicio AND :fim
        AND s.estado_chamado IN ('PAGA', 'FINALIZADA')
      GROUP BY cat.id, cat.nome_categoria
      ORDER BY total DESC
      """, nativeQuery = true)
  List<ReceitaPorCategoria> receitasPorCategoria(
      @Param("inicio") LocalDateTime inicio,
      @Param("fim") LocalDateTime fim);
}
