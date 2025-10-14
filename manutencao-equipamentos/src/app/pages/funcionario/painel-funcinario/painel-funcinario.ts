import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Panel } from '../../../shared/panel/panel';
import { NavComponent } from '../../../shared/Nav/nav';
import { TableChamado } from '../../../shared/table-chamado/table-chamado';
import { PainelAcoesFuncionario } from '../../../shared/painel-acoes-funcionario/painel-acoes-funcionario';
import { ModalComponent } from '../../../shared/novo-modal/novo-modal';
import { EfetuarOrcamento } from '../efetuar-orcamento/efetuar-orcamento';

export interface Chamado {
  id: string;
  codigo: string;
  cliente: string;
  descricao: string;
  data_chamado: string;
  estado: string;
}

export enum Estados {
  ABERTA = 'ABERTA',
  ORCADA = 'ORÇADA',
  REJEITADA = 'REJEITADA',
  APROVADA = 'APROVADA',
  REDIRECIONADA = 'REDIRECIONADA',
  ARRUMADA = 'ARRUMADA',
  PAGA = 'PAGA',
  FINALIZADA = 'FINALIZADA'
}

@Component({
  selector: 'app-painel-funcinario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Panel,
    NavComponent,
    TableChamado,
    PainelAcoesFuncionario,
    ModalComponent,
    EfetuarOrcamento
  ],
  templateUrl: './painel-funcinario.html',
  styleUrl: './painel-funcinario.css'
})
export class PainelFuncinario implements OnInit {
  orcamentoModalVisible = false;
  selectedChamado: any = null;
  chamados: Chamado[] = [];
  filtroEstado: Estados = Estados.ABERTA;
  estadosDisponiveis: Estados[] = Object.values(Estados);

  data: Chamado[] = [
    { "id": "1", "codigo": "123", "cliente": "Ana Carolina Souza", "descricao": "Impressora fiscal não está imprimindo as notas fiscais.", "data_chamado": "10/10/2025", "estado": "FINALIZADA" },
    { "id": "2", "codigo": "456", "cliente": "Bruno Oliveira", "descricao": "Computador da recepção está muito lento e travando.", "data_chamado": "11/10/2025", "estado": "PAGA" },
    { "id": "3", "codigo": "789", "cliente": "Juliana Lima", "descricao": "Monitor secundário não está dando imagem, cabo já foi trocado.", "data_chamado": "13/10/2025", "estado": "APROVADA" },
    { "id": "4", "codigo": "456", "cliente": "Rafael Martins", "descricao": "Notebook não conecta na rede Wi-Fi do escritório.", "data_chamado": "13/10/2025", "estado": "REJEITADA" },
    { "id": "5", "codigo": "789", "cliente": "Leticia Pereira", "descricao": "Scanner da multifuncional está digitalizando com uma faixa preta.", "data_chamado": "14/10/2025", "estado": "ORÇADA" },
    { "id": "6", "codigo": "123", "cliente": "Ricardo Almeida", "descricao": "O nobreak do servidor está apitando sem parar, mesmo com energia.", "data_chamado": "14/10/2025", "estado": "ABERTA" },
    { "id": "7", "codigo": "951", "cliente": "Lucas Ferreira", "descricao": "Mouse sem fio parou de funcionar, troca de pilha não resolveu.", "data_chamado": "14/10/2025", "estado": "ABERTA" },
    { "id": "8", "codigo": "357", "cliente": "Camila Rocha", "descricao": "Solicitação de instalação do pacote Adobe no computador do marketing.", "data_chamado": "14/10/2025", "estado": "ABERTA" },
    { "id": "9", "codigo": "123", "cliente": "Fernando Gomes", "descricao": "A tela do notebook está com uma mancha escura no canto superior.", "data_chamado": "13/10/2025", "estado": "ORÇADA" },
    { "id": "10", "codigo": "456", "cliente": "Beatriz Santos", "descricao": "Não consigo acessar a pasta compartilhada da rede no meu novo login.", "data_chamado": "14/10/2025", "estado": "ABERTA" },
    { "id": "11", "codigo": "789", "cliente": "Vinicius Costa", "descricao": "Webcam não é reconhecida durante as videochamadas.", "data_chamado": "13/10/2025", "estado": "APROVADA" },
    { "id": "12", "codigo": "951", "cliente": "Mariana Azevedo", "descricao": "Impressora da recepção está atolando papel constantemente.", "data_chamado": "14/10/2025", "estado": "ABERTA" },
    { "id": "13", "codigo": "357", "cliente": "Gustavo Dias", "descricao": "Orçamento para troca de teclado de notebook com defeito.", "data_chamado": "13/10/2025", "estado": "REJEITADA" },
    { "id": "14", "codigo": "123", "cliente": "Sofia Ribeiro", "descricao": "Email não está enviando mensagens, recebe normalmente.", "data_chamado": "13/10/2025", "estado": "ORÇADA" }
  ];

  ngOnInit(): void {
    this.atualizarListaExibida();
  }

  onFiltroChange(): void {
    this.atualizarListaExibida();
  }

  private atualizarListaExibida(): void {
    this.chamados = this.data
      .filter(chamado => chamado.estado === this.filtroEstado)
      .map(chamado => {
        const chamadoTratado = { ...chamado };
        if (chamadoTratado.descricao.length > 27) {
          chamadoTratado.descricao = chamadoTratado.descricao.substring(0, 27) + '...';
        }
        return chamadoTratado;
      });
  }

  openOrcamentoModal(row: any) {
    this.orcamentoModalVisible = true;
    this.selectedChamado = row.id;
  }

  closeOrcamentoModal() {
    this.orcamentoModalVisible = false;
  }
}
