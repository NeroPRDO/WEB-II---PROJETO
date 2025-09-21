import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {
  Aviso = 'Aviso qualquer';
  Descricao = 'Uma descrição qualquer tbm sobre aviso';
  Opcao1 = 'Opção cancelar';
  Opcao2 = 'Confirmar';
}
