package br.com.webdois.backend_web_api.config;

import java.time.LocalDateTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import br.com.webdois.backend_web_api.entity.Role;
import br.com.webdois.backend_web_api.entity.Usuario;
import br.com.webdois.backend_web_api.repository.UsuarioRepository;

@Configuration
public class AdminSeeder {

    @Bean
    CommandLineRunner initAdminUser(UsuarioRepository repository, PasswordEncoder passwordEncoder) {
        return args -> {

            String adminEmail = "admin@sistema.com";

            if (repository.findByEmail(adminEmail).isEmpty()) {

                Usuario admin = new Usuario();

                admin.setNome("Administrador");
                admin.setEmail(adminEmail);
                admin.setSenha(passwordEncoder.encode("123456"));  // senha padrão
                admin.setCpf("00000000000");
                admin.setTelefone("11999999999");
                admin.setCep("00000-000");
                admin.setLogradouro("Sistema");
                admin.setNumero("1");
                admin.setCidade("Cidade");
                admin.setEstado("BR");
                admin.setAtivo(true);
                admin.setDataCriacao(LocalDateTime.now().toLocalDate());
                admin.setRole(Role.FUNCIONARIO);

                repository.save(admin);

                System.out.println("Usuário ADMIN criado com sucesso.");
            } else {
                System.out.println("Usuário ADMIN já existe.");
            }
        };
    }
}