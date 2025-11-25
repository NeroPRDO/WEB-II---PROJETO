package br.com.webdois.backend_web_api.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import br.com.webdois.backend_web_api.dtos.ReceitaPorCategoria;
import br.com.webdois.backend_web_api.dtos.ReceitaPorDia;
import br.com.webdois.backend_web_api.service.RelatorioService;

@RestController
@RequestMapping("/relatorios")
@CrossOrigin(origins = "*")
public class RelatorioController {

    private final RelatorioService service;

    public RelatorioController(RelatorioService service) {
        this.service = service;
    }

    // GET /relatorios/receitas?de=2025-01-01&ate=2025-12-31
    @GetMapping("/receitas")
    public List<ReceitaPorDia> receitasPorDia(
            @RequestParam("de") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate de,
            @RequestParam("ate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate ate) {
        return service.receitasPorDia(de, ate);
    }

    // GET /relatorios/receitas-categoria?de=2025-01-01&ate=2025-12-31
    @GetMapping("/receitas-categoria")
    public List<ReceitaPorCategoria> receitasPorCategoria(
            @RequestParam("de") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate de,
            @RequestParam("ate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate ate) {
        return service.receitasPorCategoria(de, ate);
    }
}
