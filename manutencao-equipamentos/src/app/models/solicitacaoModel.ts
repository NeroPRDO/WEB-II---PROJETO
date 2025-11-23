export class solicitacaoModel {
  id!: number;
  dataHora!: string; 
  descricao!: string;
  estadoChamado!: 'ABERTO' | 'EM_ANDAMENTO' | 'CONCLUIDO' | 'CANCELADO' | 'ORCADO' | string;
  usuario!: UsuarioResumo;
}

export class UsuarioResumo {
  id!: number;
  nome!: string;
  email!: string;
}