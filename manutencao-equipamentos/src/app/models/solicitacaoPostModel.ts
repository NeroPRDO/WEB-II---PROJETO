export class solicitacaoPostModel {
  descricao!: string;
  estadoChamado!: 'ABERTA' | 'EM_ANDAMENTO' | 'ORCADA' | 'APROVADA' | 'REJEITADA' | string;
  usuarioId!: number;
}