import { Component } from '@angular/core';
import { NavComponent } from '../shared/Nav/nav';
import { RouterLink, RouterModule } from '@angular/router';
import { SolicitacaoService } from '../services/solicitacao';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-visualizar-servico',
  standalone: true,
  imports: [NavComponent, RouterModule, RouterLink, FormsModule],
  templateUrl: './visualizar-servico.html',
  styleUrl: './visualizar-servico.css'
})
export class VisualizarServico {
  solicitacao: string = '';

  constructor(private solicitacaoService: SolicitacaoService) {
    this.solicitacao = this.solicitacaoService.solicitacao;
  }
  visualizarOrcamento = false;
  visualizarRejeitar = false;
  motivoRejeicao = '';

  visualizar() {
    this.visualizarOrcamento = !this.visualizarOrcamento;
  }

  visuRejeitar() {
    this.visualizarRejeitar = !this.visualizarRejeitar;
  }
  setMotivoRejeicao(s: string) {
    this.motivoRejeicao = s;
  }

  confirmarRejeicao() {
    if (!this.motivoRejeicao.trim()) {
      window.alert('Por favor, informe o motivo da rejeição.');
      return;
    }
    window.alert('Serviço Rejeitado\nMotivo: ' + this.motivoRejeicao);
    this.visualizarRejeitar = false;
    this.visualizarOrcamento = false;

  }

}
