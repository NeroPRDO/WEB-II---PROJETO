import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroRequest } from '../models/cadastroModel'; 

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  // URL base da sua API
  private readonly API_BASE_URL = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }
  
  /**
   * Envia os dados para o endpoint de registro de novo cliente.
   * @param data Objeto CadastroRequest completo.
   * @returns Observable da resposta do cadastro.
   */
  cadastrar(data: CadastroRequest): Observable<any> {
    const url = `${this.API_BASE_URL}/Auth/register`; 
    
    // O backend envia um email com a senha provisória, então o retorno é apenas a confirmação.
    return this.http.post<any>(url, data);
  }
}
