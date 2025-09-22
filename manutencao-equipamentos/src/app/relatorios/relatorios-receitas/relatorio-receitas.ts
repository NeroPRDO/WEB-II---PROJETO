import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RelatorioReceitasService, Receita } from '../../shared/relatorios/relatorio-receitas.service';

@Component({
  selector: 'app-relatorio-receitas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './relatorio-receitas.html',
  styleUrls: ['./relatorio-receitas.css']
})
export class RelatorioReceitas implements OnInit {
  inicio?: string; // yyyy-mm-dd
  fim?: string;    // yyyy-mm-dd

  carregado = false;
  linhas: { day: string; total: number; itens: Receita[] }[] = [];

  constructor(private relatorio: RelatorioReceitasService) {}

  ngOnInit(): void {
    this.relatorio.seedMockIfEmpty();
    this.onFiltrar(); // carrega tudo inicialmente
  }

  onFiltrar() {
    const dIni = this.inicio ? new Date(this.inicio) : null;
    const dFim = this.fim ? new Date(this.fim) : null;
    const dados = this.relatorio.queryPorPeriodo(dIni, dFim);
    this.linhas = this.relatorio.groupByDay(dados);
    this.carregado = true;
  }

  onLimpar() {
    this.inicio = undefined;
    this.fim = undefined;
    this.onFiltrar();
  }

  gerarPDF() {
    window.print(); // usar "Salvar como PDF" do navegador
  }

  totalGeral(): number {
    return this.linhas.reduce((acc, l) => acc + l.total, 0);
  }
}
