// CORREÇÃO 1: Adicionar Input, Output e EventEmitter na importação
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao-servicos',
  // CORREÇÃO 2: Remover a propriedade 'imports' se não for um componente standalone
  templateUrl: './botao-servicos.html',
  styleUrl: './botao-servicos.css'
})
export class BotaoServicos {

  /**
   * (Opcional) Recebe o ID do serviço ou o objeto completo.
   * Será emitido de volta nos eventos de ação para que o componente pai
   * saiba em qual item a ação foi disparada.
   */
  @Input() serviceData: any;

  /**
   * Controla o estado de desabilitado dos botões.
   * Útil para prevenir cliques múltiplos enquanto uma operação está em andamento.
   */
  @Input() isLoading: boolean = false;

  /**
   * Evento emitido quando o botão "Aprovar" é clicado.
   * Emite o `serviceData` para o componente pai.
   */
  @Output() onApprove = new EventEmitter<any>();

  /**
   * Evento emitido quando o botão "Rejeitar" é clicado.
   * Emite o `serviceData` para o componente pai.
   */
  @Output() onReject = new EventEmitter<any>();

  /**
   * Evento emitido quando o botão "Ver Orçamento" é clicado.
   * Emite o `serviceData` para o componente pai.
   */
  @Output() onShowBudget = new EventEmitter<any>();

  constructor() { }

  //Métodos internos

  approveService(): void {
    this.onApprove.emit(this.serviceData);
  }

  rejectService(): void {
    this.onReject.emit(this.serviceData);
  }

  showBudget(): void {
    this.onShowBudget.emit(this.serviceData);
  }
}