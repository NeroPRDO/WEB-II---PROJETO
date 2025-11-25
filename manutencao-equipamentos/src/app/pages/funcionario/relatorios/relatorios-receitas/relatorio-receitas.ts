import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RelatoriosService, ReceitaPorDia } from '../../../../services/relatorios.service';

type ItemDia = {
  dataIso: string; // ISO para o date pipe funcionar
  categoria: string;
  descricao?: string | null;
  valor: number;
};

type LinhaDia = {
  day: string; // yyyy-MM-dd (string vinda do back)
  total: number;
  itens: ItemDia[]; // tabela interna do dia (aqui usamos 1 item-resumo)
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
    // se preferir já carregar “desde sempre”:
    // this.onFiltrar();
  }

  onFiltrar(): void {
    this.carregado = false;
    this.erro = null;

    const de = this.inicio?.trim() || '1970-01-01'; // “desde sempre”
    const ate = this.fim?.trim() || this.hojeIso();

    this.svc.getReceitas(de, ate).subscribe({
      next: (lista: ReceitaPorDia[]) => {
        // mapeia cada agregado por dia para a estrutura que o HTML espera
        this.linhas = (lista ?? []).map((d) => {
          // criamos um único “item-resumo” no dia (já que o back não manda itens)
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
    // simples e compatível: imprime a página/tela atual
    window.print();
  }

  private hojeIso(): string {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${mm}-${dd}`;
  }
}
