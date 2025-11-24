import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { OrcamentoService } from '../../services/orcamentoService';

@Component({
  selector: 'app-visu-orcamento',
  templateUrl: './visu-orcamento.html',
  styleUrl: './visu-orcamento.css'
})
export class VisuOrcamento implements OnInit {

  @Input() dados!: number;   // <-- agora é um ID (Número)
  @Output() close = new EventEmitter<void>();

  orcamento: any = null;     // <-- aqui ficam os dados do orçamento

  constructor(private orcamentoService: OrcamentoService) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.orcamentoService.listarPorSolicitacao(this.dados).subscribe({
      next: (lista) => {
        this.orcamento = lista[0]; // pega o primeiro orçamento
      },
      error: () => {
        alert("Erro ao carregar dados do orçamento.");
      }
    });
  }

  closeModal() {
    this.close.emit();
  }

  aprovar() {
    this.orcamentoService.aprovar(this.orcamento.idOrcamento).subscribe({
      next: () => {
        alert("Orçamento aprovado!");
        this.close.emit();
      },
      error: () => alert("Erro ao aprovar.")
    });
  }

  rejeitar() {
    this.orcamentoService.rejeitar(this.orcamento.idOrcamento).subscribe({
      next: () => {
        alert("Orçamento rejeitado!");
        this.close.emit();
      },
      error: (err) => {alert("Erro ao rejeitar.")
        console.error(err)
      }
    });
  }
}
