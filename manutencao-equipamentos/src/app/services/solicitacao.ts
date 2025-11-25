import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { solicitacaoModel } from '../models/solicitacaoModel';
import { solicitacaoPostModel } from '../models/solicitacaoPostModel';

export interface FinalizarSolicitacaoRequest {
  idSolicitacao: number;
  idFuncionario: number;
}


@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  http = inject(HttpClient);

  API = "http://localhost:8080/Solicitacoes";

  private refreshChamadosSubject = new Subject<void>();

  chamadosAtualizados$ = this.refreshChamadosSubject.asObservable();

  constructor() { }

  notificarAtualizacao(): void {
    this.refreshChamadosSubject.next();
  }

  list(): Observable<solicitacaoModel[]> {
    return this.http.get<solicitacaoModel[]>(this.API);
  }

  listById(id: number): Observable<solicitacaoModel[]> {
    return this.http.get<solicitacaoModel[]>(this.API + "/usuario/" + id).pipe(tap(() => this.notificarAtualizacao()));
  }

  save(solicitacao: solicitacaoPostModel): Observable<solicitacaoPostModel> {
    return this.http.post<solicitacaoPostModel>(this.API, solicitacao).pipe(tap(() => this.notificarAtualizacao()));;
  }

  findById(id: number): Observable<solicitacaoModel> {
    return this.http.get<solicitacaoModel>(this.API + "/" + id);
  }

  finalizarManutencao(dto: FinalizarSolicitacaoRequest): Observable<any> {
    return this.http.post(`${this.API}/finalizar`, dto).pipe(
      tap(() => this.notificarAtualizacao())
    );
  }

}
