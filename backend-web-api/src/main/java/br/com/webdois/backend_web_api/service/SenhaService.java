package br.com.webdois.backend_web_api.service;

import java.security.SecureRandom;
import org.springframework.stereotype.Service;

@Service
public class SenhaService {

    private static final String LETRAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    private static final String NUMEROS = "0123456789";
    private static final String SIMBOLOS = "!@#$%&";

    private final SecureRandom random = new SecureRandom();

    //para fins de teste
    public String gerarSenhaSimples(int tamanho) {
        return gerarSenha(NUMEROS, tamanho);
    }

    public String gerarSenhaForte(int tamanho) {
        return gerarSenha(LETRAS + NUMEROS + SIMBOLOS, tamanho);
    }

    private String gerarSenha(String base, int tamanho) {
        StringBuilder senha = new StringBuilder(tamanho);

        for (int i = 0; i < tamanho; i++) {
            int index = random.nextInt(base.length());
            senha.append(base.charAt(index));
        }

        return senha.toString();
    }
}
