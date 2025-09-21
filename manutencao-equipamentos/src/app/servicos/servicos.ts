import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../shared/Nav/nav';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router'; // Importe o Router

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavComponent,
    RouterLink
  ],
  templateUrl: './servicos.html',
  styleUrl: './servicos.css'
})

export class Servicos {
  isRejectionModalVisible: boolean = false;
isRejectionConfirmationVisible: boolean = false;
rejectionReason: string = '';
  // Variável que controla a visibilidade do nosso modal
  isModalVisible: boolean = false;

  // Valor total do serviço (pode vir de uma API no futuro)
  totalValue: string = 'R$ 280,00'; 
  
  // Mensagem a ser exibida no modal
  approvalMessage: string = '';

  // Injetamos o Router para poder usá-lo para navegação
  constructor(private router: Router) {}

  /**
   * Prepara a mensagem e torna o modal visível.
   */
  openApprovalModal(): void {
    // Define a mensagem dinâmica que será exibida
    this.approvalMessage = `Serviço Aprovado no Valor ${this.totalValue}`;
    
    // Altera a variável para true, o que faz o modal aparecer na tela via *ngIf
    this.isModalVisible = true;
  }
  /** Esconde o modal e redireciona o usuário para a tela de histórico (RF003).*/
  confirmApproval(): void {
    // Esconde o modal
    this.isModalVisible = false;

    // AQUI você faria a chamada para a API para mudar o status para "APROVADA"
    console.log('Serviço aprovado! Redirecionando...');

    // Redireciona para a rota da RF003 (ajuste o caminho se necessário)
    this.router.navigate(['/../']); 
  }

  openRejectionModal(): void {
    // Limpa qualquer motivo de uma rejeição anterior para garantir que o campo comece vazio
    this.rejectionReason = ''; 
    
    // Mostra o modal que tem o campo de texto (textarea)
    this.isRejectionModalVisible = true;
}

/**
 * 2. Confirma o motivo, fecha o primeiro modal e abre o segundo (de confirmação).
 */
confirmRejection(): void {
    // Impede a continuação se o motivo estiver vazio
    if (!this.rejectionReason.trim()) {
      return; 
    }

    // AQUI você enviaria o `this.rejectionReason` para sua API para salvar o motivo
    console.log('Serviço Rejeitado. Motivo:', this.rejectionReason);

    // Esconde o modal de motivo
    this.isRejectionModalVisible = false;
    
    // Mostra o modal de confirmação final ("Serviço Rejeitado")
    this.isRejectionConfirmationVisible = true;
}

/**
 * 3. Fecha o modal de confirmação final e redireciona o usuário.
 * (Corresponde à lógica do seu "confirmARejectModal")
 */
closeRejectionConfirmation(): void {
    // Esconde o modal de confirmação final
    this.isRejectionConfirmationVisible = false;

    // Redireciona o usuário para o dashboard
    console.log('Rejeição confirmada! Redirecionando para o dashboard...');
    this.router.navigate(['/../']); 
}

/**
 * (Função bônus) Permite que o usuário cancele a ação de rejeitar.
 */
  closeRejectionModal(): void {
    this.isRejectionModalVisible = false;
}
}