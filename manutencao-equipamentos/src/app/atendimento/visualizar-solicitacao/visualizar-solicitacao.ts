import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface Historico {
  dataHora: string;
  descricao: string;
  usuario?: string;
}

@Component({
  selector: 'app-visualizar-solicitacao',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './visualizar-solicitacao.html',
  styleUrls: ['./visualizar-solicitacao.css']
})
export class VisualizarSolicitacao {
  id: string | null = null;

  // mocks (substituir por dados vindos de API/BD futuramente)
  estado = 'ORÇADA';
  preco = 350.00;
  descricaoEquip = 'Notebook Lenovo Ideapad 3';
  categoria = 'Notebook';
  defeito = 'Não liga';
  historico: Historico[] = [
    { dataHora: '25/08/2025 10:00', descricao: 'Solicitação criada (ABERTA)' },
    { dataHora: '25/08/2025 11:00', descricao: 'Orçamento emitido (ORÇADA)' }
  ];

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
