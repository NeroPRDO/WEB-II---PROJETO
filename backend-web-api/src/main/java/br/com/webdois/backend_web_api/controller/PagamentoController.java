package br.com.webdois.backend_web_api.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.webdois.backend_web_api.dtos.PagamentoRequestDTO;
import br.com.webdois.backend_web_api.entity.Pagamento;
import br.com.webdois.backend_web_api.service.PagamentoService;

@RestController
@RequestMapping("/pagamentos")
public class PagamentoController {

    private final PagamentoService pagamentoService;

    public PagamentoController(PagamentoService pagamentoService) {
        this.pagamentoService = pagamentoService;
    }

    @PostMapping
    public ResponseEntity<Pagamento> criarPagamento(@RequestBody PagamentoRequestDTO dto) {
        Pagamento pagamento = pagamentoService.criarPagamento(dto);
        return ResponseEntity.ok(pagamento);
    }
}
