import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../shared/Nav/nav';
import { CadastroAtendimento } from '../cadastro-atendimento/cadastro-atendimento';

interface CardOrcamento {
  id: string;
  titulo: string;
  estado: 'ORÇADA' | 'APROVADA' | 'REJEITADA' | 'ARRUMADA' | 'PAGA' | 'FINALIZADA' | 'ABERTA';
}


@Component({
  selector: 'app-dashboard',
  imports: [NavComponent, CadastroAtendimento, RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  orcamentos: CardOrcamento[] = [
    { id: 'S-001', titulo: 'Notebook Lenovo', estado: 'ORÇADA' },
    { id: 'S-002', titulo: 'Impressora HP', estado: 'APROVADA' },
    { id: 'S-003', titulo: 'PS4', estado: 'REJEITADA' },
  ];


  flag: string = 'Dash';

  isFlag(f: string) {
    this.flag = f;
  }
}
