import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  
  private apiUrl = 'http://localhost:8080/pagamentos';

  constructor(private http: HttpClient) {}

  realizarPagamento(dto: any): Observable<any> {
    return this.http.post(this.apiUrl, dto);
  }
}
