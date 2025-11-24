package br.com.webdois.backend_web_api.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.webdois.backend_web_api.dtos.SolicitacaoDTO;
import br.com.webdois.backend_web_api.dtos.SolicitacaoResponseDTO;
import br.com.webdois.backend_web_api.entity.Solicitacao;
import br.com.webdois.backend_web_api.service.SolicitacaoService;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/Solicitacoes")
@Tag(name = "Solicitações", description = "Endpoints para gerenciamento de Solicitações de Chamados")
public class SolicitacaoController {
    private SolicitacaoService solicitacaoService;

    public SolicitacaoController(SolicitacaoService solicitacaoService) {
        this.solicitacaoService = solicitacaoService;
    }

    @PostMapping
    public ResponseEntity<Solicitacao> criarSolicitacao(@RequestBody SolicitacaoDTO dto) {
        Solicitacao solicitacao = solicitacaoService.criarSolicitacao(dto);
        return ResponseEntity.ok(solicitacao);
    }

    @GetMapping
    public ResponseEntity<List<SolicitacaoResponseDTO>> list() {
        return ResponseEntity.ok(solicitacaoService.list());
    }

    @GetMapping("/{id_solicitacao}")
    public ResponseEntity<SolicitacaoResponseDTO> buscarPorId(@PathVariable Long id_solicitacao) {
        return ResponseEntity.ok(solicitacaoService.findById(id_solicitacao));
    }

    @PutMapping
    List<SolicitacaoResponseDTO> update(@RequestBody Solicitacao solicitacao) {
        return solicitacaoService.update(solicitacao);
    }

    @DeleteMapping("{id}")
    List<SolicitacaoResponseDTO> delete(@PathVariable("id") long id) {
        return solicitacaoService.delete(id);
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<SolicitacaoResponseDTO> listarPorUsuario(@PathVariable Long usuarioId) {
        return solicitacaoService.listarSolicitacaoPorCliente(usuarioId);
    }
}
