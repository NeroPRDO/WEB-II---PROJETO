import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RelatoriosService, ReceitaPorDia } from '../../../../services/relatorios.service';

type ItemDia = {
  dataIso: string;
  categoria: string;
  descricao?: string | null;
  valor: number;
};

type LinhaDia = {
  day: string;
  total: number;
  itens: ItemDia[];
};

@Component({
  selector: 'app-relatorio-receitas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './relatorio-receitas.html',
  styleUrls: ['./relatorio-receitas.css'],
  providers: [DatePipe],
})
export class RelatorioReceitas implements OnInit {
  private svc = inject(RelatoriosService);

  // bound no template
  inicio: string = '';
  fim: string = '';

  linhas: LinhaDia[] = [];
  carregado = false;
  erro: string | null = null;

  ngOnInit(): void {
    this.onFiltrar();
  }

  onFiltrar(): void {
    this.carregado = false;
    this.erro = null;

    const de = this.inicio?.trim() || '1970-01-01'; // “desde sempre”
    const ate = this.fim?.trim() || this.hojeIso();

    this.svc.getReceitas(de, ate).subscribe({
      next: (lista: ReceitaPorDia[]) => {
        this.linhas = (lista ?? []).map((d) => {
          const itemResumo: ItemDia = {
            dataIso: `${d.dia}T00:00:00`,
            categoria: '—',
            descricao: 'Total do dia',
            valor: d.total ?? 0,
          };
          return {
            day: d.dia,
            total: d.total ?? 0,
            itens: [itemResumo],
          };
        });
        this.carregado = true;
      },
      error: (err) => {
        console.error(err);
        this.erro = 'Erro ao carregar o relatório.';
        this.linhas = [];
        this.carregado = true;
      },
    });
  }

  onLimpar(): void {
    this.inicio = '';
    this.fim = '';
    this.linhas = [];
    this.carregado = false;
    this.erro = null;
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
