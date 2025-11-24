import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

// Definição básica do Usuário para a listagem
export interface Usuario {
  id: number;
  nome: string;
  email: string;
  role: string; // 'FUNCIONARIO' | 'CLIENTE'
}

@Injectable({
  providedIn: 'root'
})
export class funcService {
  private http = inject(HttpClient);
  
  // Verifique se a porta é 8081 ou 8080
  private API_URL = 'http://localhost:8080/usuarios';

  // Busca todos e filtra apenas os FUNCIONARIOS
  getFuncionarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_URL).pipe(
      // O operador 'map' permite transformar os dados antes de chegarem ao componente
      map(todosUsuarios => todosUsuarios.filter(u => u.role === 'FUNCIONARIO'))
    );
  }
}