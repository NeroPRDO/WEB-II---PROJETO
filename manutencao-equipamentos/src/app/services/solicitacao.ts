import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable,map, catchError, of } from 'rxjs';
import { Chamado } from '../models/chamadoModel';
import { solicitacaoModel } from '../models/solicitacaoModel';
import { solicitacaoPostModel } from '../models/solicitacaoPostModel';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  http = inject(HttpClient);

  API = "http://localhost:8080/Solicitacoes";

  constructor() { }

  list(): Observable<solicitacaoModel[]> {
    return this.http.get<solicitacaoModel[]>(this.API);
  }

  listById(id: number): Observable<solicitacaoModel[]> {
    return this.http.get<solicitacaoModel[]>(this.API+"/usuario/"+id);
  }
 
  save(solicitacao : solicitacaoPostModel): Observable<solicitacaoPostModel>{
    return this.http.post<solicitacaoPostModel>(this.API, solicitacao);
  }

  findById(id:number): Observable<solicitacaoModel>{
    return this.http.get<solicitacaoModel>(this.API+"/"+id);
  }
}
