package br.com.webdois.backend_web_api.service;

import br.com.webdois.backend_web_api.entity.Equipamento;
import br.com.webdois.backend_web_api.repository.EquipamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipamentoService {

    @Autowired
    private EquipamentoRepository repository;

    public List<Equipamento> listarTodos() {
        return repository.findAll();
    }

    public Optional<Equipamento> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public Equipamento salvar(Equipamento equipamento) {
        return repository.save(equipamento);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}