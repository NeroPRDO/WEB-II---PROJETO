package br.com.webdois.backend_web_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.webdois.backend_web_api.dtos.OrcamentoRequestDTO;
import br.com.webdois.backend_web_api.entity.Orcamento;
import br.com.webdois.backend_web_api.service.OrcamentoService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/Orcamentos")
@Tag(name = "Orçamentos")
public class OrcamentoController {
    
    @Autowired
    private OrcamentoService orcamentoService;

    @PostMapping
    public ResponseEntity<Orcamento> criarOrcamento(@RequestBody OrcamentoRequestDTO dto) {
        Orcamento orcamento = orcamentoService.criarOrcamento(dto);
        return ResponseEntity.ok(orcamento);
    }
}
