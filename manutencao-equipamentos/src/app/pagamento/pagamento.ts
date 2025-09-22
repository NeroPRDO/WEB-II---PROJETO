import { Component } from '@angular/core';
import { NavComponent } from '../shared/Nav/nav';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  standalone: true, 
  imports: [NavComponent,CommonModule],
  templateUrl: './pagamento.html',
  styleUrl: './pagamento.css'
})
export class Pagamento {
  // Variável para controlar a exibição da segunda etapa do formulário
  isSecondStep: boolean = false;

  // O construtor permite o Router para navegação
  constructor(private router: Router) {}

  // Função para avançar para a próxima etapa do form
  proximo(): void {
    this.isSecondStep = true;
    alert(`Avança, após ter completado todos os campos`);
  }

  // Função para voltar para a etapa anterior do form
  voltar(): void {
    this.isSecondStep = false;
  }

  // Função para "confirmar" o pagamento
  confirmarPagamento(): void {
    const agora = new Date();
    const horaFormatada = agora.toLocaleTimeString('pt-BR');
    const dataFormatada = agora.toLocaleDateString('pt-Br');
    
    // O alert() funciona da mesma forma
    alert(`Pagamento Confirmado e Registrado ${dataFormatada} às ${horaFormatada}!`);
    this.router.navigate(['/../']);
  }
}