package br.com.webdois.backend_web_api.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import br.com.webdois.backend_web_api.dtos.ReceitaPorCategoria;
import br.com.webdois.backend_web_api.dtos.ReceitaPorDia;
import br.com.webdois.backend_web_api.repository.ChamadoRepository;

@Service
public class RelatorioService {

    private final ChamadoRepository chamadoRepository;

    public RelatorioService(ChamadoRepository chamadoRepository) {
        this.chamadoRepository = chamadoRepository;
    }

    public List<ReceitaPorDia> receitasPorDia(LocalDate de, LocalDate ate) {
        if (de == null || ate == null || de.isAfter(ate)) {
            throw new IllegalArgumentException("Intervalo de datas inválido");
        }
        return chamadoRepository.receitasPorDia(de, ate);
    }

    public List<ReceitaPorCategoria> receitasPorCategoria(LocalDate de, LocalDate ate) {
        if (de == null || ate == null || de.isAfter(ate)) {
            throw new IllegalArgumentException("Intervalo de datas inválido");
        }
        return chamadoRepository.receitasPorCategoria(de, ate);
    }
}
