package br.com.webdois.backend_web_api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.webdois.backend_web_api.entity.Categoria;
import br.com.webdois.backend_web_api.service.CategoriaService;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {
    
    private final CategoriaService categoriaService;
    
    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @PostMapping
    List<Categoria> create(@RequestBody Categoria categoria) {
        return categoriaService.create(categoria);
    }

    @GetMapping
    List<Categoria> list() {
        return categoriaService.list();
    }

    @PutMapping
    List<Categoria> update(@RequestBody Categoria categoria) {
        return categoriaService.update(categoria);
    }

    @DeleteMapping("{id}")
    List<Categoria> delete(@PathVariable("id") long id) {
        return categoriaService.delete(id);
    }
}
