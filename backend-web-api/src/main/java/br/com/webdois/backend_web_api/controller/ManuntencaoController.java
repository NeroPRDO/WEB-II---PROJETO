package br.com.webdois.backend_web_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
