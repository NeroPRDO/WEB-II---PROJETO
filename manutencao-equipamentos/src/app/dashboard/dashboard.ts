import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../shared/Nav/nav';
import { TableChamado, TableColumn } from '../shared/table-chamado/table-chamado';
import { SolicitacaoService } from '../services/solicitacao';


export interface Solicitacao {
  id: number;
  dataHora: string;
  descricao: string;
  estado: 'ORÇADA' | 'APROVADA' | 'REJEITADA' | 'ARRUMADA' | string;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent, RouterLink, CommonModule, TableChamado],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private solicitacaoService: SolicitacaoService) { }

  data = [
    { id: 1, dataHora: '2025-09-15 10:00', descricao: 'Notebook Dell Inspiron muito lento', estado: 'ORÇADA' },
    { id: 2, dataHora: '2025-09-14 15:30', descricao: 'Impressora HP não imprime', estado: 'APROVADA' },
    { id: 3, dataHora: '2025-09-13 09:45', descricao: 'PC Gamer não liga', estado: 'REJEITADA' },
    { id: 4, dataHora: '2025-09-12 08:20', descricao: 'MacBook Pro troca de tela', estado: 'ARRUMADA' },
  ];

  enviar(estado: string) {
    this.solicitacaoService.solicitacao = estado;
  }
}
