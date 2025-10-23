package br.com.webdois.backend_web_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.webdois.backend_web_api.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    
}
