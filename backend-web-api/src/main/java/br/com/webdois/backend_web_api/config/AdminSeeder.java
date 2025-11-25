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
            criarFuncionarioSeNaoExistir(
                repository,
                passwordEncoder,
                "Maria Silva",
                "maria@sistema.com",
                "11111111111"
            );

            criarFuncionarioSeNaoExistir(
                repository,
                passwordEncoder,
                "Mário Souza",
                "mario@sistema.com",
                "22222222222"
            );
        };
    }

    private void criarFuncionarioSeNaoExistir(
            UsuarioRepository repository,
            PasswordEncoder passwordEncoder,
            String nome,
            String email,
            String cpf) {

        if (repository.findByEmail(email).isEmpty()) {

            Usuario funcionario = new Usuario();
            funcionario.setNome(nome);
            funcionario.setEmail(email);
            funcionario.setSenha(passwordEncoder.encode("123456"));
            funcionario.setCpf(cpf);
            funcionario.setTelefone("11999990000");
            funcionario.setCep("00000-000");
            funcionario.setLogradouro("Rua Exemplo");
            funcionario.setNumero("100");
            funcionario.setCidade("Cidade");
            funcionario.setEstado("BR");
            funcionario.setAtivo(true);
            funcionario.setDataCriacao(LocalDateTime.now().toLocalDate());
            funcionario.setRole(Role.FUNCIONARIO);

            repository.save(funcionario);

            System.out.println("Funcionário " + nome + " criado com sucesso.");
        } else {
            System.out.println("Funcionário " + nome + " já existe.");
        }
    }
}
