import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ReceitaPorDia {
  dia: string; // ISO yyyy-MM-dd (string vinda do back)
  total: number;
}
export interface ReceitaPorCategoria {
  categoriaId: number;
  categoriaNome: string;
  total: number;
}

const BASE = 'http://localhost:8080/relatorios'; // troque para environment.apiUrl se usar

@Injectable({ providedIn: 'root' })
export class RelatoriosService {
  private http = inject(HttpClient);

  getReceitas(de: string, ate: string): Observable<ReceitaPorDia[]> {
    const params = new HttpParams().set('de', de).set('ate', ate);
    return this.http.get<ReceitaPorDia[]>(`${BASE}/receitas`, { params });
  }

  getReceitasPorCategoria(de: string, ate: string): Observable<ReceitaPorCategoria[]> {
    const params = new HttpParams().set('de', de).set('ate', ate);
    return this.http.get<ReceitaPorCategoria[]>(`${BASE}/receitas-categoria`, { params });
  }
}
