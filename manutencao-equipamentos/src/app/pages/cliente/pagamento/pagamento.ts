import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../../shared/Nav/nav';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SolicitacaoService } from '../../../services/solicitacao';
import { OrcamentoService } from '../../../services/orcamentoService';
import { PagamentoService } from '../../../services/pagamento-service';

@Component({
  selector: 'app-pagamento',
  standalone: true, 
  imports: [NavComponent, CommonModule, FormsModule],
  templateUrl: './pagamento.html',
  styleUrl: './pagamento.css'
})
export class Pagamento implements OnInit {

  solicitacaoId!: number;
  solicitacao: any;
  orcamento: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private solicitacaoService: SolicitacaoService,
    private orcamentoService: OrcamentoService,
    private pagamentoService: PagamentoService
  ) {}

  ngOnInit(): void {
    this.solicitacaoId = Number(this.route.snapshot.paramMap.get('id'));

    this.carregarSolicitacao();
    this.carregarOrcamento();
  }

  carregarSolicitacao() {
    this.solicitacaoService.findById(this.solicitacaoId)
      .subscribe({
        next: (dados) => this.solicitacao = dados,
        error: (err) => console.error("Erro ao buscar solicitação:", err)
      });
  }

  carregarOrcamento() {
    this.orcamentoService.listarPorSolicitacao(this.solicitacaoId)
      .subscribe({
        next: (dados) => this.orcamento = dados[0],
        error: (err) => console.error("Erro ao buscar orçamento:", err)
      });
  }

  confirmarPagamento(): void {

    const pagamentoDTO = {
      idf_solicitacao: this.solicitacaoId,
      valorPago: this.orcamento.valorOrcamento
    };

    this.pagamentoService.realizarPagamento(pagamentoDTO)
      .subscribe({
        next: () => {
          const agora = new Date();
          const hora = agora.toLocaleTimeString('pt-BR');
          const data = agora.toLocaleDateString('pt-BR');

          alert(`Pagamento Confirmado e Registrado em ${data} às ${hora}!`);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error("Erro ao pagar:", err);
          alert("Erro ao processar pagamento.");
        }
      });
  }
}
