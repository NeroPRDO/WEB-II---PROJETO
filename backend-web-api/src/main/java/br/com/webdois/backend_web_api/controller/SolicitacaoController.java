package br.com.webdois.backend_web_api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.webdois.backend_web_api.entity.Solicitacao;
import br.com.webdois.backend_web_api.service.SolicitacaoService;

@RestController
@RequestMapping("/Solicitacoes")
public class SolicitacaoController {
    private SolicitacaoService solicitacaoService;


    public SolicitacaoController(SolicitacaoService solicitacaoService) {
        this.solicitacaoService = solicitacaoService;
    }

    
    @PostMapping
    List<Solicitacao> create(@RequestBody Solicitacao solicitacao) {
        return solicitacaoService.create(solicitacao);
    }

    @GetMapping
    List<Solicitacao> list() {
        return solicitacaoService.list();
    }

    @PutMapping
    List<Solicitacao> update(@RequestBody  Solicitacao solicitacao) {
        return solicitacaoService.update(solicitacao);
    }

    @DeleteMapping("{id}")
    List<Solicitacao> delete(@PathVariable("id") long id) {
        return solicitacaoService.delete(id);
    }

}
