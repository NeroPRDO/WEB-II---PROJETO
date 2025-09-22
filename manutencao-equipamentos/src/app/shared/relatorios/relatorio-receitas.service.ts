import { Injectable } from '@angular/core';

export interface Receita {
  id: string;
  dataIso: string;      // ex.: 2025-09-22T10:00:00Z
  valor: number;
  categoria: string;    // ex.: 'Notebook', 'Impressora'
  descricao?: string;
  origem?: 'finalizar' | 'mock';
}

@Injectable({ providedIn: 'root' })
export class RelatorioReceitasService {
  private receitas: Receita[] = [];

  /** Mock inicial pra não ficar vazio na 1ª execução */
  seedMockIfEmpty() {
    if (this.receitas.length > 0) return;
    const hoje = new Date();
    const d = (offset: number) =>
      new Date(
        hoje.getFullYear(),
        hoje.getMonth(),
        hoje.getDate() - offset,
        10,
        30
      ).toISOString();

    this.receitas.push(
      { id: 'R-001', dataIso: d(0), valor: 350, categoria: 'Notebook',   descricao: 'Troca de tela - S-001', origem: 'mock' },
      { id: 'R-002', dataIso: d(1), valor: 120, categoria: 'Impressora', descricao: 'Rolo de tração - S-002', origem: 'mock' },
      { id: 'R-003', dataIso: d(2), valor: 220, categoria: 'Console',    descricao: 'Reparo HDMI - S-003',   origem: 'mock' },
    );
  }

  addReceita(r: Receita) {
    this.receitas.push({ ...r });
  }

  getAll(): Receita[] {
    return [...this.receitas];
  }

  /** Filtra por período (datas podem ser nulas) */
  queryPorPeriodo(inicio?: Date | null, fim?: Date | null): Receita[] {
    const start = inicio ? new Date(inicio) : null;
    const end = fim ? new Date(fim) : null;

    return this.getAll().filter((r) => {
      const d = new Date(r.dataIso);
      if (start && d < start) return false;
      if (end) {
        const endDay = new Date(end);
        endDay.setHours(23, 59, 59, 999); // inclui o dia inteiro
        if (d > endDay) return false;
      }
      return true;
    });
  }

  /** Agrupa por dia (yyyy-mm-dd) somando valores */
  groupByDay(receitas: Receita[]) {
    const map = new Map<string, { total: number; itens: Receita[] }>();
    for (const r of receitas) {
      const key = new Date(r.dataIso).toISOString().slice(0, 10); // yyyy-mm-dd
      const bucket = map.get(key) ?? { total: 0, itens: [] };
      bucket.total += r.valor;
      bucket.itens.push(r);
      map.set(key, bucket);
    }
    return [...map.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([day, info]) => ({ day, ...info }));
  }

  /** Agrupa por categoria somando valores */
  groupByCategoria(receitas?: Receita[]) {
    const source = receitas ?? this.getAll();
    const map = new Map<string, number>();
    for (const r of source) {
      const key = r.categoria || 'Sem categoria';
      map.set(key, (map.get(key) ?? 0) + r.valor);
    }
    return [...map.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([categoria, total]) => ({ categoria, total }));
  }
}
