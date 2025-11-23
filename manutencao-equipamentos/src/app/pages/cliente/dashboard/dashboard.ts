import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { NavComponent } from '../../../shared/Nav/nav';
import { SolicitacaoService } from '../../../services/solicitacaoService';
import { solicitacaoModel } from '../../../models/solicitacaoModel';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent, RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  lista: solicitacaoModel[] = [];
  solicitacaoService = inject(SolicitacaoService)
  
  
  
  constructor(){
    this.list();
   }

  list(){
    this.solicitacaoService.list().subscribe({
      next: lista =>{
        this.lista = lista;
      },
      error: (err: HttpErrorResponse) => {
        
        console.error('Erro detalhado:', err);
        
        if (err.status === 401) {
          alert('Sessão expirada ou não autenticada. Por favor, faça login novamente.');
          
        } 
        else if (err.status === 403) {
          alert('Você não tem permissão para acessar este recurso.');
        } 
        else if (err.status === 0) {
          alert('Não foi possível conectar ao servidor. Verifique se o Backend está rodando.');
        } 
        else {
          
          const mensagemBackend = err.error?.message || err.message;
          alert(`Ocorreu um erro: ${mensagemBackend}`);
        }
      },
    });
  }

}
