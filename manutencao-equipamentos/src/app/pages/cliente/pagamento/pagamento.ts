import { Component, signal } from '@angular/core';
import { NavComponent } from '../../../shared/Nav/nav';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagamento',
  standalone: true, 
  imports: [NavComponent, CommonModule, FormsModule],
  templateUrl: './pagamento.html',
  styleUrl: './pagamento.css'
})
export class Pagamento {
  
  constructor(private router: Router) {}

  proximo(): void {
    alert(`Avança, após ter completado todos os campos`);
  }

  voltar(): void {
  }
  confirmarPagamento(): void {
    const agora = new Date();
    const horaFormatada = agora.toLocaleTimeString('pt-BR');
    const dataFormatada = agora.toLocaleDateString('pt-Br');
    
    alert(`Pagamento Confirmado e Registrado ${dataFormatada} às ${horaFormatada}!`);
    this.router.navigate(['/../']);
  }
}