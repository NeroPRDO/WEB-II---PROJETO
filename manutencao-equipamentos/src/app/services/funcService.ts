import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


export interface Usuario {
  id: number;
  nome: string;
  email: string;
  role: string; 
}

@Injectable({
  providedIn: 'root'
})
export class funcService {
  private http = inject(HttpClient);
  
  
  private API_URL = 'http://localhost:8080/usuarios';

 
  getFuncionarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_URL).pipe(
      map(todosUsuarios => todosUsuarios.filter(u => u.role === 'FUNCIONARIO'))
    );
  }
}