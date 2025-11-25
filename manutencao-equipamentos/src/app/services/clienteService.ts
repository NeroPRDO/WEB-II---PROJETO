import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroRequest } from '../models/cadastroModel'; 

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  private readonly API_BASE_URL = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }
  
  cadastrar(data: CadastroRequest): Observable<any> {
    const url = `${this.API_BASE_URL}/Auth/register`; 
    return this.http.post<any>(url, data);
  }
}
