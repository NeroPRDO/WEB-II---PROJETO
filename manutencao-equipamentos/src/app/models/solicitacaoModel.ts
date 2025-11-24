export class solicitacaoModel {
  id!: number;
  dataHora!: string; 
  descricao!: string;
  estadoChamado!: 'ABERTA' | 'EM_ANDAMENTO' | 'ORCADA' | 'APROVADA' | 'REJEITADA' | string;
  usuario!: UsuarioResumo;
  descricaoEquipamentos!: string; 
  idCategoria!: number;
}

export class UsuarioResumo {
  id!: number;
  nome!: string;
  email!: string;
  descricaoEquipamentos?: string; 
  idCategoria?: number;
}