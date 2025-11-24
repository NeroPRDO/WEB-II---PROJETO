package br.com.webdois.backend_web_api.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.webdois.backend_web_api.dtos.SolicitacaoDTO;
import br.com.webdois.backend_web_api.dtos.SolicitacaoResponseDTO;
import br.com.webdois.backend_web_api.dtos.UsuarioSolicitacaoDTO;
import br.com.webdois.backend_web_api.entity.Categoria;
import br.com.webdois.backend_web_api.entity.Solicitacao;
import br.com.webdois.backend_web_api.entity.Usuario;
import br.com.webdois.backend_web_api.repository.CategoriaRepository;
import br.com.webdois.backend_web_api.repository.SolicitacaoRepository;
import br.com.webdois.backend_web_api.repository.UsuarioRepository;

@Service
public class SolicitacaoService {
    @Autowired
    private SolicitacaoRepository solicitacaoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private CategoriaRepository categoriaRepository;

    public SolicitacaoService(SolicitacaoRepository solicitacaoRepository) {
        this.solicitacaoRepository = solicitacaoRepository;
    }

    public Solicitacao criarSolicitacao(SolicitacaoDTO dto) {
        Usuario usuario = usuarioRepository.findById(dto.getUsuarioId())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Categoria categoria = categoriaRepository.findById(dto.getCategoriaId())
                .orElseThrow(() -> new RuntimeException("Categoria não encontrado"));

        Solicitacao solicitacao = new Solicitacao();
        solicitacao.setDescricao(dto.getDescricao());
        solicitacao.setEstadoChamado(dto.getEstadoChamado());
        solicitacao.setDataHora(LocalDateTime.now());
        solicitacao.setUsuario(usuario);
        solicitacao.setCategoria(categoria);

        solicitacao.setDescricao_equipamentos(dto.getDescricaoEquipamentos());
        return solicitacaoRepository.save(solicitacao);
    }

    public List<SolicitacaoResponseDTO> list() {
        List<Solicitacao> solicitacoes = solicitacaoRepository.findAll();

        return solicitacoes.stream()
                .map(s -> SolicitacaoResponseDTO.builder()
                        .id(s.getId())
                        .dataHora(s.getDataHora())
                        .descricao(s.getDescricao())
                        .estadoChamado(s.getEstadoChamado().name())
                        .usuario(new UsuarioSolicitacaoDTO(s.getUsuario()))
                        .descricaoEquipamentos(s.getDescricao_equipamentos())
                        .idCategoria(s.getCategoria().getId())
                        .build())
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

        return SolicitacaoResponseDTO.builder()
                .id(solicitacao.getId())
                .dataHora(solicitacao.getDataHora())
                .descricao(solicitacao.getDescricao())
                .estadoChamado(solicitacao.getEstadoChamado().name())
                .usuario(new UsuarioSolicitacaoDTO(solicitacao.getUsuario()))
                .descricaoEquipamentos(solicitacao.getDescricao_equipamentos())
                .idCategoria(solicitacao.getCategoria().getId())
                .build();
    }

    public SolicitacaoResponseDTO toDTO(Solicitacao solicitacao) {
        return SolicitacaoResponseDTO.builder()
                .id(solicitacao.getId())
                .dataHora(solicitacao.getDataHora())
                .descricao(solicitacao.getDescricao())
                .estadoChamado(solicitacao.getEstadoChamado().name())
                .usuario(new UsuarioSolicitacaoDTO(solicitacao.getUsuario()))
                .descricaoEquipamentos(solicitacao.getDescricao_equipamentos())
                .idCategoria(solicitacao.getCategoria().getId())
                .build();
    }

    public List<SolicitacaoResponseDTO> listarSolicitacaoPorCliente(Long usuarioId) {
        List<Solicitacao> solicitacaos = solicitacaoRepository.findByUsuarioId(usuarioId);

        return solicitacaos.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

}
