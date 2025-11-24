package br.com.webdois.backend_web_api.controller;

import br.com.webdois.backend_web_api.dtos.FuncionarioRequestDTO;
import br.com.webdois.backend_web_api.entity.Role;
import br.com.webdois.backend_web_api.entity.Usuario;
import br.com.webdois.backend_web_api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/funcionarios")
public class FuncionarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody FuncionarioRequestDTO dto) {

        if (usuarioRepository.findByEmail(dto.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("E-mail já cadastrado");
        }

        Usuario f = new Usuario();
        f.setNome(dto.getNome());
        f.setEmail(dto.getEmail());
        f.setDataNascimento(dto.getDataNascimento());
        f.setSenha(passwordEncoder.encode(dto.getSenha()));
        f.setAtivo(true);
        f.setRole(Role.FUNCIONARIO);

        usuarioRepository.save(f);

        return ResponseEntity.ok("Funcionário cadastrado com sucesso!");
    }
    @GetMapping
    public List<Usuario> getAll() {
        return usuarioRepository.findAll()
                .stream()
                .filter(u -> u.getRole() == Role.FUNCIONARIO)
                .toList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        var opt = usuarioRepository.findById(id);

        if (opt.isEmpty() || opt.get().getRole() != Role.FUNCIONARIO) {
            return ResponseEntity.badRequest().body("Funcionário não encontrado");
        }

        return ResponseEntity.ok(opt.get());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody FuncionarioRequestDTO dto) {

        var opt = usuarioRepository.findById(id);

        if (opt.isEmpty() || opt.get().getRole() != Role.FUNCIONARIO) {
            return ResponseEntity.badRequest().body("Funcionário não encontrado");
        }

        Usuario f = opt.get();

        var emailExistente = usuarioRepository.findByEmail(dto.getEmail());
        if (emailExistente.isPresent() && !emailExistente.get().getId().equals(id)) {
            return ResponseEntity.badRequest().body("E-mail já está em uso");
        }

        f.setNome(dto.getNome());
        f.setEmail(dto.getEmail());
        f.setDataNascimento(dto.getDataNascimento());

        f.setSenha(passwordEncoder.encode(dto.getSenha()));

        usuarioRepository.save(f);

        return ResponseEntity.ok("Funcionário atualizado com sucesso!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {

        var opt = usuarioRepository.findById(id);

        if (opt.isEmpty() || opt.get().getRole() != Role.FUNCIONARIO) {
            return ResponseEntity.badRequest().body("Funcionário não encontrado");
        }

        usuarioRepository.delete(opt.get());

        return ResponseEntity.ok("Funcionário deletado com sucesso!");
    }
}
