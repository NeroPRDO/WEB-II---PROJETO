import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import { Cliente } from '../models/clienteModel';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private apiUrl = 'http://localhost:3000/clientes';

  private httpOptions = {
    observe: "response" as "response", 
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

 
   getAllClientes(): Observable<Cliente[] | null> {
    return this.http.get<Cliente[]>(this.apiUrl, this.httpOptions).pipe(
        map((resp: HttpResponse<Cliente[]>) => {
          if (resp.status === 200 && resp.body) {
            return resp.body; 
          } else {
            console.error(`Erro ao listar clientes: Status ${resp.status}`);
            return null;
          }
        }),
        catchError((error) => {
          console.error('Erro na requisição HTTP para listar clientes:', error);
          return of(null); 
        })
      );
  }

  getClienteById(id: number): Observable<Cliente | null> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
        map((resp: HttpResponse<Cliente>) => {
          if (resp.status === 200 && resp.body) {
            return resp.body; 
          } else {
            console.error(`Erro ao buscar cliente por ID ${id}: Status ${resp.status}`);
            return null;
          }
        }),
        catchError((error) => {
          console.error(`Erro na requisição HTTP para buscar cliente por ID ${id}:`, error);
          return of(null);
        })
      );
  }

  createCliente(cliente: Cliente): Observable<Cliente | null> {
    return this.http.post<Cliente>(this.apiUrl, JSON.stringify(cliente), this.httpOptions).pipe(
        map((resp: HttpResponse<Cliente>) => {
          if (resp.status === 201 && resp.body) {
            return resp.body; 
          } else {
            console.error(`Erro ao inserir cliente: Status ${resp.status}`);
            return null;
          }
        }),
        catchError((error) => {
          console.error('Erro na requisição HTTP para inserir cliente:', error);
          return of(null);
        })
      );
  }

  updateCliente(cliente: Cliente): Observable<Cliente | null> {
    if (!cliente.id) {
      console.error('Erro ao alterar cliente: ID não fornecido.');
      return of(null); 
    }
    return this.http.put<Cliente>(`${this.apiUrl}/${cliente.id}`, JSON.stringify(cliente), this.httpOptions).pipe(
        map((resp: HttpResponse<Cliente>) => {
          
          if (resp.status === 200 && resp.body) {
            return resp.body; 
          } else {
            console.error(`Erro ao alterar cliente ID ${cliente.id}: Status ${resp.status}`);
            return null;
          }
        }),
        catchError((error) => {
          console.error(`Erro na requisição HTTP para alterar cliente ID ${cliente.id}:`, error);
          return of(null);
        })
      );
  }


  deleteCliente(id: number): Observable<Cliente | null> {
    return this.http.delete<Cliente>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
        map((resp: HttpResponse<Cliente>) => {
          if (resp.status === 200 || resp.status === 204) {
            return resp.body; 
          } else {
            console.error(`Erro ao remover cliente ID ${id}: Status ${resp.status}`);
            return null;
          }
        }),
        catchError((error) => {
          console.error(`Erro na requisição HTTP para remover cliente ID ${id}:`, error);
          return of(null);
        })
      );
  }
}
