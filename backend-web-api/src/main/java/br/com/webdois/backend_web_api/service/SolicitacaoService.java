package br.com.webdois.backend_web_api.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.webdois.backend_web_api.dtos.SolicitacaoDTO;
import br.com.webdois.backend_web_api.dtos.SolicitacaoResponseDTO;
import br.com.webdois.backend_web_api.dtos.UsuarioSolicitacaoDTO;
import br.com.webdois.backend_web_api.entity.Solicitacao;
import br.com.webdois.backend_web_api.entity.Usuario;
import br.com.webdois.backend_web_api.repository.SolicitacaoRepository;
import br.com.webdois.backend_web_api.repository.UsuarioRepository;

@Service
public class SolicitacaoService {
    @Autowired
    private SolicitacaoRepository solicitacaoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public SolicitacaoService(SolicitacaoRepository solicitacaoRepository) {
        this.solicitacaoRepository = solicitacaoRepository;
    }

    public Solicitacao criarSolicitacao(SolicitacaoDTO dto) {
        Usuario usuario = usuarioRepository.findById(dto.getUsuarioId())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Solicitacao solicitacao = new Solicitacao();
        solicitacao.setDescricao(dto.getDescricao());
        solicitacao.setEstadoChamado(dto.getEstadoChamado());
        solicitacao.setDataHora(LocalDateTime.now());
        solicitacao.setUsuario(usuario);

        return solicitacaoRepository.save(solicitacao);
    }

    public List<SolicitacaoResponseDTO> list() {
        List<Solicitacao> solicitacoes = solicitacaoRepository.findAll();

        return solicitacoes.stream()
                .map(s -> new SolicitacaoResponseDTO(
                        s.getId(),
                        s.getDataHora(),
                        s.getDescricao(),
                        s.getEstadoChamado().name(),
                        new UsuarioSolicitacaoDTO(s.getUsuario())))
                .toList();
    }

    public List<SolicitacaoResponseDTO> update(Solicitacao solicitacao) {
        solicitacaoRepository.save(solicitacao);
        return list();
    }

    public List<SolicitacaoResponseDTO> delete(long id) {
        solicitacaoRepository.deleteById(id);
        return list();
    }

    public SolicitacaoResponseDTO findById(Long id) {
        Solicitacao solicitacao = solicitacaoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Solicitação não encontrada"));

        return new SolicitacaoResponseDTO(
                solicitacao.getId(),
                solicitacao.getDataHora(),
                solicitacao.getDescricao(),
                solicitacao.getEstadoChamado().name(),
                new UsuarioSolicitacaoDTO(solicitacao.getUsuario()));
    }

    public SolicitacaoResponseDTO toDTO(Solicitacao solicitacao) {
        return new SolicitacaoResponseDTO(
                solicitacao.getId(),
                solicitacao.getDataHora(),
                solicitacao.getDescricao(),
                solicitacao.getEstadoChamado().name(),
                new UsuarioSolicitacaoDTO(solicitacao.getUsuario()));
    }

    public List<SolicitacaoResponseDTO> listarSolicitacaoPorCliente(Long usuarioId) {
        List<Solicitacao> solicitacaos = solicitacaoRepository.findByUsuarioId(usuarioId);

        return solicitacaos.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

}
