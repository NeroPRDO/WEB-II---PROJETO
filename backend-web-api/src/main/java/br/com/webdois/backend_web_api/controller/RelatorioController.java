package br.com.webdois.backend_web_api.controller;

import br.com.webdois.backend_web_api.dtos.ReceitaPorCategoria;
import br.com.webdois.backend_web_api.dtos.ReceitaPorDia;
import br.com.webdois.backend_web_api.service.RelatorioService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/relatorios")
public class RelatorioController {

    private final RelatorioService relatorioService;

    public RelatorioController(RelatorioService relatorioService) {
        this.relatorioService = relatorioService;
    }

    /**
     * GET /relatorios/receitas-dia?inicio=2025-11-01&fim=2025-11-30
     */
    @GetMapping("/receitas-dia")
    public List<ReceitaPorDia> receitasPorDia(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate inicio,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fim) {
        return relatorioService.receitasPorDia(inicio, fim);
    }

    /**
     * GET /relatorios/receitas-categoria?inicio=2025-11-01&fim=2025-11-30
     */
    @GetMapping("/receitas-categoria")
    public List<ReceitaPorCategoria> receitasPorCategoria(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate inicio,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fim) {
        return relatorioService.receitasPorCategoria(inicio, fim);
    }
}
