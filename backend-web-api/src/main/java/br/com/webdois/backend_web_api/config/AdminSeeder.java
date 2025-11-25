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

            // ===========================================
            // CRIAR ADMIN
            // ===========================================
            String adminEmail = "admin@sistema.com";

            if (repository.findByEmail(adminEmail).isEmpty()) {

                Usuario admin = new Usuario();

                admin.setNome("Administrador");
                admin.setEmail(adminEmail);
                admin.setSenha(passwordEncoder.encode("123456"));
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

            // ===========================================
            // FUNCIONÁRIOS MARIA E MÁRIO
            // ===========================================

            criarUsuarioSeNaoExistir(
                repository, passwordEncoder,
                "Maria Silva", "maria@sistema.com", "11111111111",
                Role.FUNCIONARIO
            );

            criarUsuarioSeNaoExistir(
                repository, passwordEncoder,
                "Mário Souza", "mario@sistema.com", "22222222222",
                Role.FUNCIONARIO
            );

            // ===========================================
            // CLIENTES JOÃO, JOSÉ, JOANA, JOAQUINA
            // ===========================================

            criarUsuarioSeNaoExistir(
                repository, passwordEncoder,
                "João Pereira", "joao@sistema.com", "33333333333",
                Role.CLIENTE
            );

            criarUsuarioSeNaoExistir(
                repository, passwordEncoder,
                "José Almeida", "jose@sistema.com", "44444444444",
                Role.CLIENTE
            );

            criarUsuarioSeNaoExistir(
                repository, passwordEncoder,
                "Joana Silva", "joana@sistema.com", "55555555555",
                Role.CLIENTE
            );

            criarUsuarioSeNaoExistir(
                repository, passwordEncoder,
                "Joaquina Souza", "joaquina@sistema.com", "66666666666",
                Role.CLIENTE
            );

        };
    }

    private void criarUsuarioSeNaoExistir(
            UsuarioRepository repository,
            PasswordEncoder passwordEncoder,
            String nome,
            String email,
            String cpf,
            Role role) {

        if (repository.findByEmail(email).isEmpty()) {

            Usuario usuario = new Usuario();
            usuario.setNome(nome);
            usuario.setEmail(email);
            usuario.setSenha(passwordEncoder.encode("123456"));
            usuario.setCpf(cpf);
            usuario.setTelefone("11999990000");
            usuario.setCep("00000-000");
            usuario.setLogradouro("Rua Exemplo");
            usuario.setNumero("100");
            usuario.setCidade("Cidade");
            usuario.setEstado("BR");
            usuario.setAtivo(true);
            usuario.setDataCriacao(LocalDateTime.now().toLocalDate());
            usuario.setRole(role);

            repository.save(usuario);

            System.out.println(role + " " + nome + " criado com sucesso.");
        } else {
            System.out.println(role + " " + nome + " já existe.");
        }
    }
}
