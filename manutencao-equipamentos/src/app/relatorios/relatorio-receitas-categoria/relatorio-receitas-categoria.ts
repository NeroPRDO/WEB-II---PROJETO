import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioReceitasService } from '../../shared/relatorios/relatorio-receitas.service';

@Component({
  selector: 'app-relatorio-receitas-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorio-receitas-categoria.html',
  styleUrls: ['./relatorio-receitas-categoria.css']
})
export class RelatorioReceitasCategoria implements OnInit {
  linhas: { categoria: string; total: number }[] = [];

  constructor(private relatorio: RelatorioReceitasService) {}

  ngOnInit(): void {
    this.relatorio.seedMockIfEmpty();
    this.linhas = this.relatorio.groupByCategoria();
  }

  gerarPDF() { window.print(); }

  totalGeral(): number {
    return this.linhas.reduce((acc, l) => acc + l.total, 0);
  }
}
