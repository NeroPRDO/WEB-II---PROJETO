import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
// Adicione estas interfaces no topo do arquivo ou em 'models/manutencaoModel.ts'
export interface ManutencaoRequest {
  solicitacaoId: number;
  funcionarioId?: number; // Para redirecionar/iniciar
  descricao?: string;     // Para efetuar manutenção
  orientacoes?: string;   // Para efetuar manutenção
}

export interface FinalizarManutencaoRequest {
  solicitacaoId: number;
  funcionarioId: number; // Quem finalizou
  // Adicione outros campos se o seu DTO Java exigir
}

// No SolicitacaoService (ou crie um ManutencaoService separado)
// ... imports

@Injectable({ providedIn: 'root' })
export class ManutencaoService {
  // ... url base antiga
  private http = inject(HttpClient);  
  // URL ESPECÍFICA DO SEU CONTROLLER NOVO (Cuidado com a digitação que está no Java)
  private API_MANUTENCAO = 'http://localhost:8080/Manuntecao'; 

  // RF014 - Efetuar Manutenção (Endpoint: /iniciar)
  // Assumindo que 'iniciar' é onde você registra a manutenção feita
  iniciarManutencao(dto: ManutencaoRequest): Observable<any> {
    return this.http.post(`${this.API_MANUTENCAO}/iniciar`, dto);
  }

  // RF015 - Redirecionar (Endpoint: /trocar-funcionario)
  trocarFuncionario(dto: ManutencaoRequest): Observable<any> {
    return this.http.post(`${this.API_MANUTENCAO}/trocar-funcionario`, dto);
  }

  // RF016 - Finalizar (Endpoint: /finalizar)
  finalizarManutencao(dto: FinalizarManutencaoRequest): Observable<any> {
    return this.http.post(`${this.API_MANUTENCAO}/finalizar`, dto);
  }
  
  
}