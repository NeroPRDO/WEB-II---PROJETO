import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

export interface ManutencaoRequest {
  solicitacaoId: number;
  descricao?: string;     
  orientacoes?: string;   
}

export interface FinalizarRequest {
  idf_solicitacao: number;
  descricacaoManuntencao: string; // Atenção: Use o nome exato do JSON do backend
  orientacao: string;             // Singular, conforme o JSON
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

  finalizarManutencao(dto: FinalizarRequest): Observable<any> {
    return this.http.post(`${this.API_MANUTENCAO}/finalizar`, dto);
  }
  
  
}