package br.com.webdois.backend_web_api.dtos;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SolicitacaoResponseDTO {
    private Long id;
    private LocalDateTime dataHora;
    private String descricao;
    private String estadoChamado;
    private UsuarioSolicitacaoDTO usuario;
    private String descricaoEquipamentos;
    
    private long idCategoria;
}
