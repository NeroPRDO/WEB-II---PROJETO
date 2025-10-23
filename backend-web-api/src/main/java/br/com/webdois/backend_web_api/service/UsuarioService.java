package br.com.webdois.backend_web_api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.webdois.backend_web_api.entity.Usuario;
import br.com.webdois.backend_web_api.repository.UsuarioRepository;

@Service
public class UsuarioService {
    private UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> create(Usuario usuario) {
        usuarioRepository.save(usuario);
        return list();
    }

    public List<Usuario> list() {
        return usuarioRepository.findAll();
    }

    public List<Usuario> update(Usuario usuario) {
        usuarioRepository.save(usuario);
        return list();
    }

    public List<Usuario> delete(long id) {
        usuarioRepository.deleteById(id);
        return list();
    }
}
