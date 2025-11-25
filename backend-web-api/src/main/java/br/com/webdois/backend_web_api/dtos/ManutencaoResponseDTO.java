package br.com.webdois.backend_web_api.dtos;

import java.time.LocalDateTime;

import br.com.webdois.backend_web_api.entity.Usuario;

import lombok.Data;

@Data
public class ManutencaoResponseDTO {
    private Long id_manutencao;

    private Usuario idf_funcionarioAtual;

    private Long id_solicitacao;

    private LocalDateTime dataHora;

    private Boolean finalizada;

    private LocalDateTime dataHoraFinalizacao;

    private String descricacaoManuntencao;

    private String orientacao;
}