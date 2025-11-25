// Importa os módulos necessários do Angular.
import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from '../../../shared/Nav/nav';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { SolicitacaoService } from '../../../services/solicitacao';
import { FormsModule } from '@angular/forms';
import { solicitacaoModel } from '../../../models/solicitacaoModel';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../../services/categoriaService';
import { VisuOrcamento } from "../../../shared/visu-orcamento/visu-orcamento";
import { OrcamentoService } from '../../../services/orcamentoService';

@Component({
  selector: 'app-visualizar-servico',
  standalone: true,
  imports: [CommonModule, NavComponent, RouterModule, RouterLink, FormsModule, VisuOrcamento],
  templateUrl: './visualizar-servico.html',
  styleUrl: './visualizar-servico.css'
})
export class VisualizarServico implements OnInit {

  private categoriaService = inject(CategoriaService);
  private route = inject(ActivatedRoute);
  private router = inject(Router); // Injetar Router para redirecionar
  private solicitacaoService = inject(SolicitacaoService);
  nomeCategoria: string = 'Carregando...';
  solicitacao?: solicitacaoModel;
  private orcamentoService = inject(OrcamentoService);
  visualizarOrcamento = false;
  orcamentoSelecionado: any = null;

  abrirOrcamento() {
    this.visualizarOrcamento = true;
  }

  fecharOrcamento() {
    this.visualizarOrcamento = false;
  }

  ngOnInit(): void {
    const idUrl = this.route.snapshot.paramMap.get('id');
    if (idUrl) {
      this.buscarPorId(Number(idUrl));
    }
  }

  buscarPorId(id: number) {
    this.solicitacaoService.findById(id).subscribe({
      next: (dados) => {
        this.solicitacao = dados;

        if (dados.idCategoria) {
          this.categoriaService.getById(dados.idCategoria).subscribe({
            next: (cat) => {
              this.nomeCategoria = cat.nomeCategoria;
            },
            error: () => {
              this.nomeCategoria = 'Não identificada';
            }
          });
        }
      },
      error: (err) => { /* ... */ }
    });
  }

  resgatarServico(idSolicitacao: number) {
    this.orcamentoService.listarPorSolicitacao(idSolicitacao).subscribe({
      next: (lista) => {
        if (!lista || lista.length === 0) {
          alert("Nenhum orçamento encontrado para esta solicitação.");
          return;
        }

        const orcamento = lista[0]; 

        console.log(orcamento)
        this.orcamentoService.aprovar(orcamento.idOrcamento).subscribe({
          next: () => {
            alert("Serviço resgatado e orçamento aprovado com sucesso!");
            this.fecharOrcamento();
            this.buscarPorId(idSolicitacao);
          },
          error: () => alert("Erro ao aprovar o orçamento.")
        });
      },
      error: () => alert("Erro ao buscar o orçamento.")
    });
  }

}
