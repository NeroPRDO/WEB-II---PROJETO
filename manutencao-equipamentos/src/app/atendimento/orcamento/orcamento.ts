import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orcamento',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './orcamento.html',
  styleUrls: ['./orcamento.css']
})
export class Orcamento {
  id: string | null = null;

  // mocks (substituir por dados vindos de API/BD futuramente)
  preco = 350.00;
  descricaoEquip = 'Notebook Lenovo Ideapad 3';
  categoria = 'Notebook';
  defeito = 'Não liga';
  showRejeicao = false;
  motivo = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  aprovar() {
    // RF006: mensagem + redirect para RF003 (home do cliente)
    alert(`Serviço Aprovado no Valor R$ ${this.preco.toFixed(2)}`);
    this.router.navigateByUrl('/');
  }

  abrirRejeicao() {
    // RF007: capturar motivo de rejeição
    this.showRejeicao = true;
  }

  cancelarRejeicao() {
    this.showRejeicao = false;
    this.motivo = '';
  }

  confirmarRejeicao() {
    if (!this.motivo.trim()) {
      alert('Informe o motivo da rejeição.');
      return;
    }
    alert('Serviço Rejeitado');
    this.router.navigateByUrl('/');
  }
}
