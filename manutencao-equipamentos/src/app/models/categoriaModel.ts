// src/app/models/categoria.ts

export interface Categoria {
  id: number;
  nome: string;
  ativo: boolean; // Para deleção lógica, conforme boas práticas.
}

// Se o Backend usa um DTO para request que tem apenas o nome:
export interface CategoriaRequest {
  nome: string;
}