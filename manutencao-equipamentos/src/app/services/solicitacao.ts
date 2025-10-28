import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable,map, catchError, of } from 'rxjs';
import { Chamado } from '../models/chamadoModel';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  private apiUrl = "http://localhost:8080/chamados"; 

  private httpOptions = {
    observe: "response" as "response", 
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAllsolicitacoes(): Observable<Chamado[] | null> {
    return this.httpClient.get<Chamado[]>(this.apiUrl, this.httpOptions).pipe(
        map((resp: HttpResponse<Chamado[]>) => {
          if (resp.status === 200 && resp.body) {
            return resp.body; 
          } else {
            console.error(`Erro ao listar chamados: Status ${resp.status}`);
            return null; 
          }
        }),
        catchError((error) => {
          console.error('Erro na requisição HTTP para listar chamados:', error);
          return of(null); 
        })
      );
  }

  
  getSolicitacaoByIdbuscarPorId(id: number): Observable<Chamado | null> {
    return this.httpClient.get<Chamado>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
        map((resp: HttpResponse<Chamado>) => {
          if (resp.status === 200 && resp.body) {
            return resp.body; 
          } else {
            console.error(`Erro ao buscar chamado por ID ${id}: Status ${resp.status}`);
            return null;
          }
        }),
        catchError((error) => {
          console.error(`Erro na requisição HTTP para buscar chamado por ID ${id}:`, error);
          return of(null);
        })
      );
  }

  inserir(chamado: Chamado): Observable<Chamado | null> {
    return this.httpClient.post<Chamado>(this.apiUrl, JSON.stringify(chamado), this.httpOptions).pipe(
        map((resp: HttpResponse<Chamado>) => {
          if (resp.status === 201 && resp.body) {
            return resp.body; 
          } else {
            console.error(`Erro ao inserir chamado: Status ${resp.status}`);
            return null;
          }
        }),
        catchError((error) => {
          console.error('Erro na requisição HTTP para inserir chamado:', error);
          return of(null);
        })
      );
  }

  
  alterar(chamado: Chamado): Observable<Chamado | null> {
    if (!chamado.idChamado) { 
      console.error('Erro ao alterar chamado: ID não fornecido.');
      return of(null); 
    }
    return this.httpClient.put<Chamado>(`${this.apiUrl}/${chamado.idChamado}`, JSON.stringify(chamado), this.httpOptions).pipe(
        map((resp: HttpResponse<Chamado>) => {
          if (resp.status === 200 && resp.body) {
            return resp.body; 
          } else {
            console.error(`Erro ao alterar chamado ID ${chamado.idChamado}: Status ${resp.status}`);
            return null;
          }
        }),
        catchError((error) => {
          console.error(`Erro na requisição HTTP para alterar chamado ID ${chamado.idChamado}:`, error);
          return of(null);
        })
      );
  }


  remover(id: number): Observable<Chamado | null> {
    return this.httpClient.delete<Chamado>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
        map((resp: HttpResponse<Chamado>) => {
          if (resp.status === 200 || resp.status === 204) {
            return resp.body;
          } else {
            console.error(`Erro ao remover chamado ID ${id}: Status ${resp.status}`);
            return null;
          }
        }),
        catchError((error) => {
          console.error(`Erro na requisição HTTP para remover chamado ID ${id}:`, error);
          return of(null);
        })
      );
  }
}
