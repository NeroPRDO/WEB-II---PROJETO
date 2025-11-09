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

import br.com.webdois.backend_web_api.entity.Usuario;
import br.com.webdois.backend_web_api.service.UsuarioService;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/usuarios")
@Tag(name = "Usuarios", description = "Endpoints para gerenciamento de Usuários")
public class UsuarioController {

    private UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping
    List<Usuario> create(@RequestBody Usuario usuario) {
        return usuarioService.create(usuario);
    }

    @GetMapping
    List<Usuario> list() {
        return usuarioService.list();
    }

    @PutMapping
    List<Usuario> update(@RequestBody Usuario usuario) {
        return usuarioService.update(usuario);
    }

    @DeleteMapping("{id}")
    List<Usuario> delete(@PathVariable("id") long id) {
        return usuarioService.delete(id);
    }
}
