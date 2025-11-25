package br.com.webdois.backend_web_api.dtos;

import java.math.BigDecimal;
import java.time.LocalDate;

public interface ReceitaPorDia {
    LocalDate getDia();

    BigDecimal getTotal();
}
