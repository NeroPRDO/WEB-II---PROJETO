import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

export interface ManutencaoRequest {
  solicitacaoId: number;
  funcionarioId?: number; 
  descricao?: string;     
  orientacoes?: string;   
}

export interface FinalizarManutencaoRequest {
  solicitacaoId: number;
  funcionarioId: number; 
}

@Injectable({ providedIn: 'root' })
export class ManutencaoService {
  
  private http = inject(HttpClient);  
  
  private API_MANUTENCAO = 'http://localhost:8080/Manuntecao'; 

  iniciarManutencao(dto: ManutencaoRequest): Observable<any> {
    return this.http.post(`${this.API_MANUTENCAO}/iniciar`, dto);
  }

  trocarFuncionario(dto: ManutencaoRequest): Observable<any> {
    return this.http.post(`${this.API_MANUTENCAO}/trocar-funcionario`, dto);
  }

  finalizarManutencao(dto: FinalizarManutencaoRequest): Observable<any> {
    return this.http.post(`${this.API_MANUTENCAO}/finalizar`, dto);
  }
  
  
}