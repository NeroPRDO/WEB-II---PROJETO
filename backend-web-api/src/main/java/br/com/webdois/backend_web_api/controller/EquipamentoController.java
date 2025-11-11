package br.com.webdois.backend_web_api.controller;

import br.com.webdois.backend_web_api.entity.Equipamento;
import br.com.webdois.backend_web_api.service.EquipamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/equipamentos")
@CrossOrigin(origins = "*") 
public class EquipamentoController {

    @Autowired
    private EquipamentoService service;

    @GetMapping
    public List<Equipamento> listar() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Equipamento> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Equipamento criar(@RequestBody Equipamento equipamento) {
        return service.salvar(equipamento);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Equipamento> atualizar(@PathVariable Long id, @RequestBody Equipamento dados) {
        return service.buscarPorId(id).map(e -> {
            e.setNome(dados.getNome());
            e.setTipo(dados.getTipo());
            e.setStatus(dados.getStatus());
            e.setDescricao(dados.getDescricao());
            return ResponseEntity.ok(service.salvar(e));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}