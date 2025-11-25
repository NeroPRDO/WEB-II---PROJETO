package br.com.webdois.backend_web_api.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FinalizarSolicitacaoDTO {
    private Long idSolicitacao;
    private Long idFuncionario;
}