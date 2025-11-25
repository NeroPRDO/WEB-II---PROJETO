// Modelo da resposta HTTP (o que o backend envia)
export interface AuthResponse {
  accessToken: string; 
  expiresIn: number;   
}

// Modelo dos dados do usuário extraídos do JWT (Payload)
export interface JwtPayload {
  sub: string; //  ID do usuário (subject)
  scope: 'CLIENTE' | 'FUNCIONARIO'; // role (scope)
  iss: string; // Issuer (Emissor do token)
  iat: number; // Issued At (Data de emissão)
  exp: number; // Expiration (Data de expiração)
}

// Modelo de Usuário Logado (O que armazenamos no serviço)
export interface UsuarioLogado {
  id: number;
  role: 'CLIENTE' | 'FUNCIONARIO';
  token: string;
}