import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../shared/Nav/nav';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent],
  templateUrl: './servicos.html',
  styleUrl: './servicos.css'
})
export class Servicos {
  // --- Controle de estado para os modais ---
  isModalVisible: boolean = false;
  isRejectionModalVisible: boolean = false;
  isRejectionConfirmationVisible: boolean = false;

  // --- Dados do componente ---
  rejectionReason: string = '';
  approvalMessage: string = '';
  totalValue: string = 'R$ 280,00'; // Em um caso real, este valor viria de uma API.

  constructor(private router: Router) {}

  // ===================================================
  // ========= FLUXO DE APROVAÇÃO DE SERVIÇO ===========
  // ===================================================

  openApprovalModal(): void {
    this.approvalMessage = `Serviço Aprovado no Valor ${this.totalValue}`;
    this.isModalVisible = true;
  }

  /** Esconde o modal e redireciona o usuário. */
  confirmApproval(): void {
    this.isModalVisible = false;
    // TODO: Adicionar chamada à API para atualizar o status para "APROVADA".
    console.log('Serviço aprovado! Redirecionando...');
    this.router.navigate(['/../']);
  }

  // ===================================================
  // ========= FLUXO DE REJEIÇÃO DE SERVIÇO ============
  // ===================================================

  openRejectionModal(): void {
    // Limpa o motivo anterior para garantir que o campo comece vazio.
    this.rejectionReason = '';
    this.isRejectionModalVisible = true;
  }

  /** Permite ao usuário cancelar a ação de rejeitar. */
  closeRejectionModal(): void {
    this.isRejectionModalVisible = false;
  }

  /** Confirma o motivo, fecha o modal atual e abre o de confirmação. */
  confirmRejection(): void {
    if (!this.rejectionReason.trim()) {
      return;
    }
    // TODO: Adicionar chamada à API para salvar o motivo da rejeição e atualizar o status.
    console.log('Serviço Rejeitado. Motivo:', this.rejectionReason);

    this.isRejectionModalVisible = false;
    this.isRejectionConfirmationVisible = true;
  }

  /** Fecha o modal de confirmação final e redireciona o usuário. */
  closeRejectionConfirmation(): void {
    this.isRejectionConfirmationVisible = false;
    console.log('Rejeição confirmada! Redirecionando...');
    this.router.navigate(['/../']);
  }
}
