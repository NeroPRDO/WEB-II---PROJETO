package br.com.webdois.backend_web_api.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.webdois.backend_web_api.dtos.ReceitaPorCategoria;
import br.com.webdois.backend_web_api.dtos.ReceitaPorDia;
import br.com.webdois.backend_web_api.entity.Chamado;

public interface ChamadoRepository extends JpaRepository<Chamado, Long> {

    // =============================
    // RELATÓRIO 1: RECEITAS POR DIA
    // =============================
    @Query(value = """
            SELECT DATE(c."data__fim") AS dia,
                   COALESCE(SUM(c."valor__orçamento"), 0) AS total
              FROM chamado c
             WHERE c."estado__chamado" IN ('ACEITO','APROVADO','PAGA','FINALIZADA')
               AND c."data__fim" BETWEEN :de AND :ate
             GROUP BY DATE(c."data__fim")
             ORDER BY dia
            """, nativeQuery = true)
    List<ReceitaPorDia> receitasPorDia(@Param("de") LocalDate de, @Param("ate") LocalDate ate);

    // ==========================================
    // RELATÓRIO 2: RECEITAS POR CATEGORIA (via equipamento -> categoria)
    // ==========================================
    // ATENÇÃO:
    // - Se a FK de categoria em EQUIPAMENTO não for "categoria_id",
    // troque e.categoria_id por e."id__categoria" (ou o nome que vocês usam).
    // - Se o campo do nome na CATEGORIA não for "nome", ajuste cat.nome.
    @Query(value = """
            SELECT cat.id   AS categoriaId,
                   cat.nome AS categoriaNome,
                   COALESCE(SUM(c."valor__orçamento"), 0) AS total
              FROM chamado c
              JOIN equipamento e ON e.id = c."id__equipamento"
              JOIN categoria  cat ON cat.id = e.categoria_id
             WHERE c."estado__chamado" IN ('ACEITO','APROVADO','PAGA','FINALIZADA')
               AND c."data__fim" BETWEEN :de AND :ate
             GROUP BY cat.id, cat.nome
             ORDER BY total DESC
            """, nativeQuery = true)
    List<ReceitaPorCategoria> receitasPorCategoria(@Param("de") LocalDate de, @Param("ate") LocalDate ate);
}
