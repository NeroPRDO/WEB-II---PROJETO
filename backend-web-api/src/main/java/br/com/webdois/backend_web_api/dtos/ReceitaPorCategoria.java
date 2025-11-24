package br.com.webdois.backend_web_api.dtos;

import java.math.BigDecimal;

public interface ReceitaPorCategoria {
    Long getCategoriaId();

    String getCategoriaNome();

    BigDecimal getTotal();
}
