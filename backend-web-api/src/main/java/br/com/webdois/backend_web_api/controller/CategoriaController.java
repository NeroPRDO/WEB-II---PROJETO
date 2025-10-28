package br.com.webdois.backend_web_api.controller;

import java.util.List;

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
        return categoriaService.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarPorId(@PathVariable Integer id) {
        Optional<Categoria> categoria = categoriaService.buscarPorId(id);
        if (categoria.isPresent()) {
            return ResponseEntity.ok(categoria.get()); // Retorna 200 OK com a categoria
        } else {
            return ResponseEntity.notFound().build(); // Retorna 404 Not Found
        }
    }

    @PostMapping
    public ResponseEntity<Categoria> inserir(@RequestBody Categoria categoria) {
        try {
            Categoria novaCategoria = categoriaService.inserir(categoria);
            // Retorna 201 Created com a nova categoria no corpo
            return ResponseEntity.status(HttpStatus.CREATED).body(novaCategoria);
        } catch (Exception e) {
            // Em caso de erro (ex: violação de constraint), retorna 400 Bad Request
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Categoria> alterar(@PathVariable Integer id, @RequestBody Categoria categoria) {
        try {
            Categoria categoriaAtualizada = categoriaService.alterar(id, categoria);
            return ResponseEntity.ok(categoriaAtualizada); // Retorna 200 OK com a categoria atualizada
        } catch (RuntimeException e) {
            // (não encontrou), retorna 404 Not Found
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            // Outros erros
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Integer id) {
        try {
            categoriaService.excluir(id);
            return ResponseEntity.noContent().build(); // Retorna 204 
        } catch (RuntimeException e) {
            // (não encontrou), retorna 404 Not Found
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            // Outros erros
             return ResponseEntity.badRequest().build();
        }
    }


    //@PostMapping
    //List<Categoria> create(@RequestBody Categoria categoria) {
    //    return categoriaService.create(categoria);
    //}

    //@GetMapping
    //List<Categoria> list() {
    //    return categoriaService.list();
    //}

    //@PutMapping
    //List<Categoria> update(@RequestBody Categoria categoria) {
    //    return categoriaService.update(categoria);
    //}

    //@DeleteMapping("{id}")
    //List<Categoria> delete(@PathVariable("id") long id) {
    //    return categoriaService.delete(id);
    //}
}
