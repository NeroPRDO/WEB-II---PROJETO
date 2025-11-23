import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orcamento } from '../models/OrcamentoModel';
import { OrcamentoRequest } from '../models/orcamentoRequestModel';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  http = inject(HttpClient);

  API = "http://localhost:8080/Orcamentos";

  constructor() { }

  create(orcamentoRequest: OrcamentoRequest): Observable<Orcamento> {
    return this.http.post<Orcamento>(this.API, orcamentoRequest);
  }

  listarPorCliente(clienteId: number): Observable<Orcamento[]> {
    return this.http.get<Orcamento[]>(`${this.API}+"/cliente/"+${clienteId}`);
  }
 
  listarPorSolicitacao(solicitacaoId: number): Observable<Orcamento[]> {
    return this.http.get<Orcamento[]>(`${this.API}+"/solicitacao/"+${solicitacaoId}`);
  }

  aprovar(idOrcamento: number): Observable<Orcamento> {
    return this.http.post<Orcamento>(`${this.API}+"/aprovar/"+${idOrcamento}`, {});
  }


  rejeitar(idOrcamento: number): Observable<Orcamento> {
    return this.http.post<Orcamento>(`${this.API}+"/rejeitar/"+${idOrcamento}`, {});
  }

}