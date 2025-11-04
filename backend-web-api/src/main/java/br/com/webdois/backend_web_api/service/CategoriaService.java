package br.com.webdois.backend_web_api.service;

import java.util.List;
import java.util.Optional;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import br.com.webdois.backend_web_api.entity.Categoria;
import br.com.webdois.backend_web_api.repository.CategoriaRepository;

@Service
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;

    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public List<Categoria> buscarTodos() {
        return categoriaRepository.findAll();
    }

    public Optional<Categoria> buscarPorId(Long id) {
        return categoriaRepository.findById(id);
    }

    public Categoria inserir(Categoria categoria) {
        categoria.setId(null);
        return categoriaRepository.save(categoria);
    }

    public Categoria alterar(Long id, Categoria categoria) {
        Optional<Categoria> categoriaExistente = categoriaRepository.findById(id);
        if (categoriaExistente.isEmpty()) {
            throw new EntityNotFoundException();
        }

        categoria.setId(id);

        return categoriaRepository.save(categoria);
    }

    public void excluir(Long id) {
        Optional<Categoria> categoriaExistente = categoriaRepository.findById(id);
        if (categoriaExistente.isEmpty()) {
            throw new EntityNotFoundException();
        }


        categoriaRepository.delete(categoriaExistente.get());
    }
}