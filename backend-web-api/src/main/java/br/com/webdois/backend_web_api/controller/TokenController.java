package br.com.webdois.backend_web_api.controller;


import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.webdois.backend_web_api.dtos.LoginRequestDTO;
import br.com.webdois.backend_web_api.dtos.LoginResponseDTO;
import br.com.webdois.backend_web_api.dtos.RegisterRequestDTO;
import br.com.webdois.backend_web_api.dtos.UserInfoDTO;
import br.com.webdois.backend_web_api.entity.Usuario;
import br.com.webdois.backend_web_api.repository.UsuarioRepository;
import br.com.webdois.backend_web_api.service.MailService;
import br.com.webdois.backend_web_api.service.SenhaService;
import io.swagger.v3.oas.annotations.tags.Tag;
import br.com.webdois.backend_web_api.entity.Role;

@RestController
@Tag(name = "Autenticação", description = "Aqui você pode logar e registrar clientes")
public class TokenController {
    private final JwtEncoder jwtEncoder;
    private final UsuarioRepository usuarioRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private MailService mailService;
    @Autowired
    private SenhaService senhaService;

    public TokenController(JwtEncoder jwtEncoder, UsuarioRepository usuarioRepository,
            BCryptPasswordEncoder passwordEncoder) {
        this.jwtEncoder = jwtEncoder;
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/Auth/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO loginRequest) {
       Optional<Usuario> user = usuarioRepository.findByEmail(loginRequest.getEmail());


        if (user.isEmpty() || !user.get().isLoginCorrect(loginRequest, passwordEncoder)) {
            throw new BadCredentialsException("login inválido");
        }

        var now = java.time.Instant.now();
        var expiresIn = 3600L;

        var scope = user.get().getRole().name();

        var claims = JwtClaimsSet.builder()
                .issuer("sistema-manutencao")
                .subject(user.get().getId().toString())
                .issuedAt(now)
                .expiresAt(now.plusSeconds(expiresIn))
                .claim("scope", scope)  
                .build();

        var jwtValue = jwtEncoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();

        var userInfo = new UserInfoDTO(
            user.get().getId(),
            user.get().getRole().name()
        );
        return ResponseEntity.ok(new LoginResponseDTO(jwtValue, expiresIn, userInfo));

    }

    @PostMapping("/Auth/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequestDTO dto) {

        if (usuarioRepository.findByEmail(dto.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email já cadastrado");
        }

        var senhaGerada = senhaService.gerarSenhaSimples(4);

        Usuario novo = new Usuario();
        novo.setNome(dto.getNome());
        novo.setEmail(dto.getEmail());
        novo.setSenha(passwordEncoder.encode(senhaGerada));
        novo.setCpf(dto.getCpf());
        novo.setDataNascimento(dto.getDataNascimento());
        novo.setTelefone(dto.getTelefone());
        novo.setCep(dto.getCep());
        novo.setLogradouro(dto.getLogradouro());
        novo.setNumero(dto.getNumero());
        novo.setComplemento(dto.getComplemento());
        novo.setBairro(dto.getBairro());
        novo.setCidade(dto.getCidade());
        novo.setEstado(dto.getEstado());

        novo.setRole(Role.CLIENTE);

        novo.setAtivo(true);
        novo.setDataCriacao(LocalDateTime.now().toLocalDate());

        usuarioRepository.save(novo);

        mailService.sendEmail(novo.getEmail(), "Senha para o sistema de manuntenção", senhaGerada);

        return ResponseEntity.ok("Usuário registrado com sucesso!");
    }
}
