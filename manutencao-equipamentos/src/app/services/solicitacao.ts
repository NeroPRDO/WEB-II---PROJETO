import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable,map, catchError, of } from 'rxjs';
import { Chamado } from '../models/chamadoModel';
import { solicitacaoModel } from '../models/solicitacaoModel';

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
 
}
