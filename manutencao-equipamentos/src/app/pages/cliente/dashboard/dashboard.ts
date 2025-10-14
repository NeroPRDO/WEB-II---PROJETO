import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { NavComponent } from '../../../shared/Nav/nav';
import { SolicitacaoService } from '../../../services/solicitacao';


export interface Solicitacao {
  id: number;
  dataHora: string;
  descricao: string;
  estado: 'ORÇADA' | 'APROVADA' | 'REJEITADA' | 'ARRUMADA' | string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent, RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private solicitacaoService: SolicitacaoService) { }

  ServiceCliente = inject(SolicitacaoService)// injetando a dependencia, da pra trocar e usar esse (boa pratica)

  data = [
    {
      id: 1,
      dataHora: '2025-09-15 10:00',
      descricao: 'Notebook Dell Inspiron muito lento',
      estado: 'ORÇADA',
      servico: 'Manutenção Preventiva',
      equipamento: 'Dell Inspiron',
      categoria: 'Notebook'
    },
    {
      id: 2,
      dataHora: '2025-09-14 15:30',
      descricao: 'Impressora HP não imprime',
      estado: 'APROVADA',
      servico: 'Troca de Cartucho e Revisão',
      equipamento: 'Impressora HP',
      categoria: 'Impressora'
    },
    {
      id: 3,
      dataHora: '2025-09-13 09:45',
      descricao: 'PC Gamer não liga',
      estado: 'REJEITADA',
      servico: 'Diagnóstico de Fonte e Placa-Mãe',
      equipamento: 'PC Gamer',
      categoria: 'Computador'
    },
    {
      id: 4,
      dataHora: '2025-09-12 08:20',
      descricao: 'MacBook Pro troca de tela',
      estado: 'ARRUMADA',
      servico: 'Substituição de Tela',
      equipamento: 'MacBook Pro',
      categoria: 'Notebook'
    },
    {
      id: 5,
      dataHora: '2025-09-12 08:20',
      descricao: 'MacBook Pro troca de tela',
      estado: 'ARRUMADA',
      servico: 'Substituição de Tela',
      equipamento: 'MacBook Pro',
      categoria: 'Notebook'
    }
  ];

  enviar(solicitacao: any) {

    this.solicitacaoService.setSolicitacoes([solicitacao]);
  }
}
