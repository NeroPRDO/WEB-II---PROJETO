export class solicitacaoPostModel {
  descricao!: string;
  estadoChamado!: 'ABERTO' | 'EM_ANDAMENTO' | 'CONCLUIDO' | 'CANCELADO' | 'ORCADO' | string;
  usuarioId!: number;
}