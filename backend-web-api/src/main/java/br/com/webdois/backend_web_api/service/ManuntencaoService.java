package br.com.webdois.backend_web_api.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.webdois.backend_web_api.dtos.FInalizarManuntencaoRequestDTO;
import br.com.webdois.backend_web_api.dtos.ManuntencaoRequestDTO;
import br.com.webdois.backend_web_api.entity.EstadoChamado;
import br.com.webdois.backend_web_api.entity.Manuntencao;
import br.com.webdois.backend_web_api.entity.Solicitacao;
import br.com.webdois.backend_web_api.entity.Usuario;
import br.com.webdois.backend_web_api.repository.ManuntencaoRepository;
import br.com.webdois.backend_web_api.repository.SolicitacaoRepository;
import br.com.webdois.backend_web_api.repository.UsuarioRepository;

@Service
public class ManuntencaoService {
    @Autowired
    private ManuntencaoRepository manuntencaoRepository;

    @Autowired
    private SolicitacaoRepository solicitacaoRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Manuntencao iniciarManuntenção(ManuntencaoRequestDTO dto) {
        Solicitacao solicitacao = solicitacaoRepository.findById(dto.getIdf_solicitacao())
                .orElseThrow(() -> new RuntimeException("Solicitação não encontrado"));
        Usuario funcionario = usuarioRepository.findById(dto.getIdf_funcionarioAtual())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Manuntencao manuntencao = new Manuntencao();
        manuntencao.setSolicitacao(solicitacao);

        manuntencao.setIdf_funcionarioAtual(funcionario);

        manuntencao.setDataHora(LocalDateTime.now());

        manuntencao.setFinalizada(false);

        solicitacao.setEstadoChamado(EstadoChamado.EM_ANDAMENTO);
        solicitacaoRepository.save(solicitacao);

        return manuntencaoRepository.save(manuntencao);
    }

    public Manuntencao finalizarManuntencao(FInalizarManuntencaoRequestDTO dto) {
        Solicitacao solicitacao = solicitacaoRepository.findById(dto.getIdf_solicitacao())
                .orElseThrow(() -> new RuntimeException("Solicitação não encontrado"));

        Manuntencao manuntencao = manuntencaoRepository.findBySolicitacaoId(dto.getIdf_solicitacao())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        manuntencao.setDataHoraFinalizacao(LocalDateTime.now());
        manuntencao.setFinalizada(true);

        solicitacao.setEstadoChamado(EstadoChamado.ARRUMADA);
        solicitacaoRepository.save(solicitacao);

        return manuntencaoRepository.save(manuntencao);
    }

    public Manuntencao TrocarFuncionario(ManuntencaoRequestDTO dto) {
        Solicitacao solicitacao = solicitacaoRepository.findById(dto.getIdf_solicitacao())
                .orElseThrow(() -> new RuntimeException("Solicitação não encontrado"));
        
        Usuario funcionario = usuarioRepository.findById(dto.getIdf_funcionarioAtual())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Manuntencao manuntencao = manuntencaoRepository.findBySolicitacaoId(dto.getIdf_solicitacao())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        manuntencao.setIdf_funcionarioAtual(funcionario);
        solicitacao.setEstadoChamado(EstadoChamado.REDIRECIONADA);
        solicitacaoRepository.save(solicitacao);

        return manuntencaoRepository.save(manuntencao);
    }
}
