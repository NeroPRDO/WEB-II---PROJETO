package br.com.webdois.backend_web_api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.webdois.backend_web_api.entity.Solicitacao;
import br.com.webdois.backend_web_api.repository.SolicitacaoRepository;

@Service
public class SolicitacaoService {
    SolicitacaoRepository solicitacaoRepository;


    public SolicitacaoService(SolicitacaoRepository solicitacaoRepository) {
        this.solicitacaoRepository = solicitacaoRepository;
    }

    public List<Solicitacao> create(Solicitacao solicitacao) {
        solicitacaoRepository.save(solicitacao);
        return list();
    }

    public List<Solicitacao> list() {
        return solicitacaoRepository.findAll();
    }

    public List<Solicitacao> update(Solicitacao solicitacao) {
        solicitacaoRepository.save(solicitacao);
        return list();
    }

    public List<Solicitacao> delete(long id) {
        solicitacaoRepository.deleteById(id);
        return list();
    }
}
