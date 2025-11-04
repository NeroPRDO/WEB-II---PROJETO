package br.com.webdois.backend_web_api.controller;

import java.util.List;

import java.util.Optional;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping
    public List<Categoria> buscarTodos() {
<<<<<<< HEAD
        return categoriaService.list();
=======
        return categoriaService.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarPorId(@PathVariable Long id) {
        Optional<Categoria> categoria = categoriaService.buscarPorId(id);
        if (categoria.isPresent()) {
            return ResponseEntity.ok(categoria.get());
        } else {
            return ResponseEntity.notFound().build();
        }
>>>>>>> df892fe182c1f8cc482115120fc6af7ca5dbff88
    }

    @PostMapping
    public ResponseEntity<Categoria> inserir(@RequestBody Categoria categoria) {
        try {
<<<<<<< HEAD
            Categoria novaCategoria = (Categoria) categoriaService.create(categoria);
            // Retorna 201 Created com a nova categoria no corpo
=======
            Categoria novaCategoria = categoriaService.inserir(categoria);
>>>>>>> df892fe182c1f8cc482115120fc6af7ca5dbff88
            return ResponseEntity.status(HttpStatus.CREATED).body(novaCategoria);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Categoria> alterar(@PathVariable Long id, @RequestBody Categoria categoria) {
        try {
<<<<<<< HEAD
            Categoria categoriaAtualizada = (Categoria) categoriaService.update(categoria);
            return ResponseEntity.ok(categoriaAtualizada); // Retorna 200 OK com a categoria atualizada
        } catch (RuntimeException e) {
=======
            Categoria categoriaAtualizada = categoriaService.alterar(id, categoria);
            return ResponseEntity.ok(categoriaAtualizada);
        } catch (EntityNotFoundException e) {
>>>>>>> df892fe182c1f8cc482115120fc6af7ca5dbff88
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        try {
<<<<<<< HEAD
            categoriaService.delete(id);
            return ResponseEntity.noContent().build(); // Retorna 204 
        } catch (RuntimeException e) {
            // (não encontrou), retorna 404 Not Found
=======
            categoriaService.excluir(id);
            return ResponseEntity.noContent().build();
        } catch (EntityNotFoundException e) {
>>>>>>> df892fe182c1f8cc482115120fc6af7ca5dbff88
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
             return ResponseEntity.badRequest().build();
        }
    }
}
