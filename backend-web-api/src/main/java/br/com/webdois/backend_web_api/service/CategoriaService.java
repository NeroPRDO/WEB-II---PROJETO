package br.com.webdois.backend_web_api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.webdois.backend_web_api.entity.Categoria;
import br.com.webdois.backend_web_api.repository.CategoriaRepository;

@Service
public class CategoriaService {
    private final CategoriaRepository categoriaRepository;

    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public List<Categoria> create(Categoria categoria) {
        categoriaRepository.save(categoria);
        return list();
    }

    public List<Categoria> list() {
        return categoriaRepository.findAll();
    }

    public List<Categoria> update(Categoria categoria) {
        categoriaRepository.save(categoria);
        return list();
    }

    public List<Categoria> delete(long id) {
        categoriaRepository.deleteById(id);
        return list();
    }
}
