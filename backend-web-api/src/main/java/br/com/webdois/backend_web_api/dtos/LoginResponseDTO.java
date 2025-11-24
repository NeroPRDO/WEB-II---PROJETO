package br.com.webdois.backend_web_api.dtos;

public record LoginResponseDTO(String accessToken, Long expiresIn, UserInfoDTO  user) {

}
