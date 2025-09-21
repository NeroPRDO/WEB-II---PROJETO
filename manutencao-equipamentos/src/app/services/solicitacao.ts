import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  private _solicitacoes: any[] = [];

  setSolicitacoes(dados: any[]) {
    this._solicitacoes = dados;
  }

  getSolicitacoes(): any[] {
    return this._solicitacoes;
  }
}
