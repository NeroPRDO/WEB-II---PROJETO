export interface CadastroRequest {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}


export interface CadastroData extends CadastroRequest {
    localidade: string; 
    uf: string;         
}