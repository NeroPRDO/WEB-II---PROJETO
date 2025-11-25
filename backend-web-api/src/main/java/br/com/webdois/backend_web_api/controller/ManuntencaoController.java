package br.com.webdois.backend_web_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.webdois.backend_web_api.dtos.FInalizarManuntencaoRequestDTO;
import br.com.webdois.backend_web_api.dtos.ManuntencaoRequestDTO;
import br.com.webdois.backend_web_api.entity.Manuntencao;
import br.com.webdois.backend_web_api.service.ManuntencaoService;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/Manuntecao")
@Tag(name = "Manuntecao")
public class ManuntencaoController {
    @Autowired
    private ManuntencaoService manuntencaoService;

    @PostMapping("/iniciar")
    public ResponseEntity<Manuntencao> iniciarManutencao(@RequestBody ManuntencaoRequestDTO dto) {
        Manuntencao manutencao = manuntencaoService.iniciarManuntenção(dto);
        return ResponseEntity.ok(manutencao);
    }

    @PostMapping("/finalizar")
    public ResponseEntity<Manuntencao> iniciarManutencao(@RequestBody FInalizarManuntencaoRequestDTO dto) {
        Manuntencao manutencao = manuntencaoService.finalizarManuntencao(dto);
        return ResponseEntity.ok(manutencao);
    }

    @PostMapping("/trocar-funcionario")
    public ResponseEntity<Manuntencao> trocarFuncionario(@RequestBody ManuntencaoRequestDTO dto) {
        try {
            Manuntencao manutencaoAtualizada = manuntencaoService.TrocarFuncionario(dto);
            return ResponseEntity.ok(manutencaoAtualizada);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/buscar-por-solicitacao/{idSolicitacao}")
    public ResponseEntity<Manuntencao> buscarPorSolicitacao(@PathVariable Long idSolicitacao) {
        try {
            Manuntencao manutencao = manuntencaoService.buscarPorSolicitacao(idSolicitacao);
            return ResponseEntity.ok(manutencao);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
