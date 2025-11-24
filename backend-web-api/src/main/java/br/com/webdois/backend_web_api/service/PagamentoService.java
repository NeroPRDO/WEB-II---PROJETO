package br.com.webdois.backend_web_api.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.webdois.backend_web_api.dtos.PagamentoRequestDTO;
import br.com.webdois.backend_web_api.entity.EstadoChamado;
import br.com.webdois.backend_web_api.entity.Pagamento;
import br.com.webdois.backend_web_api.entity.Solicitacao;
import br.com.webdois.backend_web_api.repository.PagamentoRepository;
import br.com.webdois.backend_web_api.repository.SolicitacaoRepository;

@Service
public class PagamentoService {
    @Autowired
    private SolicitacaoRepository solicitacaoRepository;

    @Autowired
    private PagamentoRepository pagamentoRepository;

    public Pagamento criarPagamento(PagamentoRequestDTO dto){
        Solicitacao solicitacao = solicitacaoRepository.findById(dto.getIdf_solicitacao())
                .orElseThrow(() -> new RuntimeException("Solicitação não encontrado"));

        Pagamento pagamento =  new Pagamento();

        pagamento.setData_pagamento(LocalDateTime.now());
        pagamento.setValorPago(dto.getValorPago());
        pagamento.setSolicitacao(solicitacao);

        solicitacao.setEstadoChamado(EstadoChamado.PAGA);
        solicitacaoRepository.save(solicitacao);
        return pagamentoRepository.save(pagamento);
    }

    
}
