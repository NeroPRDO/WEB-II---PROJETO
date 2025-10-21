//teste chamado model
export interface Chamado {
  idChamado: number;
  idUsuario: number;
  idAcesso: number;
  idFuncionarioResponsavel?: number; 
  nomeUsuario: string;
  nomeFuncionarioResponsavel?: string; 
  idEquipamento: number;
  nomeEquipamento: string;
  descricaoEquipamento: string;
  valorOrcamento?: number;
  estadoChamado: 'Aberto' | 'Em andamento' | 'Concluído' | 'Cancelado';
  dataInicio: Date;
  dataFim?: Date;
}
