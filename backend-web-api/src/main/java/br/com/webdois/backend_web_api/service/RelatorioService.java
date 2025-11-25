package br.com.webdois.backend_web_api.service;

import br.com.webdois.backend_web_api.dtos.ReceitaPorCategoria;
import br.com.webdois.backend_web_api.dtos.ReceitaPorDia;
import br.com.webdois.backend_web_api.repository.ChamadoRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Service
public class RelatorioService {

    private final ChamadoRepository chamadoRepository;

    public RelatorioService(ChamadoRepository chamadoRepository) {
        this.chamadoRepository = chamadoRepository;
    }

    public List<ReceitaPorDia> receitasPorDia(LocalDate inicio, LocalDate fim) {
        LocalDateTime inicioDt = inicio.atStartOfDay();
        LocalDateTime fimDt = fim.atTime(LocalTime.MAX);
        return chamadoRepository.receitasPorDia(inicioDt, fimDt);
    }

    public List<ReceitaPorCategoria> receitasPorCategoria(LocalDate inicio, LocalDate fim) {
        LocalDateTime inicioDt = inicio.atStartOfDay();
        LocalDateTime fimDt = fim.atTime(LocalTime.MAX);
        return chamadoRepository.receitasPorCategoria(inicioDt, fimDt);
    }
}
