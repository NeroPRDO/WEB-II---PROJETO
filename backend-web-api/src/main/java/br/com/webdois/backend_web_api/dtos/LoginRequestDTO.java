package br.com.webdois.backend_web_api.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class LoginRequestDTO {
    @Setter @Getter
    private String email;
    @Setter @Getter
    private String senha;

}