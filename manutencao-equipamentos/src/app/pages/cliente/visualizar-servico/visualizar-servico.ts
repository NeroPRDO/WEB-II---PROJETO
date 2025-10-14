// Importa os módulos necessários do Angular.
import { Component } from '@angular/core';
import { NavComponent } from '../../../shared/Nav/nav'; 
import { RouterLink, RouterModule } from '@angular/router'; 
import { SolicitacaoService } from '../../../services/solicitacao'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-visualizar-servico', 
  standalone: true, 
  imports: [NavComponent, RouterModule, RouterLink, FormsModule], 
  templateUrl: './visualizar-servico.html', 
  styleUrl: './visualizar-servico.css' 
})
export class VisualizarServico {
  // Array para armazenar as solicitações
  solicitacoes: any[] = [];

  // O construtor injeta o serviço de solicitações
  constructor(private solicitacaoService: SolicitacaoService) { }

  ngOnInit() {
    // Pega os dados da service e os armazena no array de solicitações
    this.solicitacoes = this.solicitacaoService.getSolicitacoes();
  }


  // Variáveis para controlar a visibilidade dos modais
  visualizarOrcamento = false;
  visualizarRejeitar = false;
  
  motivoRejeicao = '';

  
  visualizar() {
    this.visualizarOrcamento = !this.visualizarOrcamento;
  }

  // Função para alternar a visibilidade do modal de rejeição
  visuRejeitar() {
    this.visualizarRejeitar = !this.visualizarRejeitar;
  }
  // Função para definir o motivo da rejeição
  setMotivoRejeicao(s: string) {
    this.motivoRejeicao = s;
  }

  // Função para confirmar a rejeição
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