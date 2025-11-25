import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RelatoriosService, ReceitaPorCategoria } from '../../../../services/relatorios.service';

type LinhaCategoria = {
  categoria: string;
  total: number;
};

@Component({
  selector: 'app-relatorio-receitas-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './relatorio-receitas-categoria.html',
  styleUrls: ['./relatorio-receitas-categoria.css'],
})
export class RelatorioReceitasCategoria implements OnInit {
  private svc = inject(RelatoriosService);

  linhas: LinhaCategoria[] = [];
  carregando = false;
  erro: string | null = null;

  ngOnInit(): void {
    // “desde sempre” até hoje
    const de = '1970-01-01';
    const ate = this.hojeIso();

    this.carregando = true;
    this.svc.getReceitasPorCategoria(de, ate).subscribe({
      next: (lista: ReceitaPorCategoria[]) => {
        this.linhas = (lista ?? []).map((l) => ({
          categoria: l.categoriaNome,
          total: l.total ?? 0,
        }));
        this.carregando = false;
      },
      error: (err) => {
        console.error(err);
        this.erro = 'Erro ao carregar o relatório.';
        this.linhas = [];
        this.carregando = false;
      },
    });
  }

  totalGeral(): number {
    return this.linhas.reduce((acc, l) => acc + (l.total || 0), 0);
  }

  gerarPDF(): void {
    window.print();
  }

  private hojeIso(): string {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${mm}-${dd}`;
  }
}
