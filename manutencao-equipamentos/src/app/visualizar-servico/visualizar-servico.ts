import { Component } from '@angular/core';
import { NavComponent } from '../shared/Nav/nav';
import { RouterLink, RouterModule } from '@angular/router';
import { SolicitacaoService } from '../services/solicitacao';

@Component({
  selector: 'app-visualizar-servico',
  standalone: true,
  imports: [NavComponent, RouterModule, RouterLink],
  templateUrl: './visualizar-servico.html',
  styleUrl: './visualizar-servico.css'
})
export class VisualizarServico {
  solicitacao: string = '';

  constructor(private solicitacaoService: SolicitacaoService) {
    this.solicitacao = this.solicitacaoService.solicitacao;
  }
}
