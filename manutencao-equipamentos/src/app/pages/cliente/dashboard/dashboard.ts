import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { NavComponent } from '../../../shared/Nav/nav';
import { SolicitacaoService } from '../../../services/solicitacao';
import { solicitacaoModel } from '../../../models/solicitacaoModel';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent, RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit { // 1. Implementar OnInit
  
  lista: solicitacaoModel[] = [];
  loading = true; // Adicionei loading para feedback visual
  
  private solicitacaoService = inject(SolicitacaoService);
  private router = inject(Router); // Injetar Router para redirecionar se necessário
  
  constructor(){
    // Deixar o construtor vazio
  }

  // 2. Chamar no ngOnInit
  ngOnInit(): void {
    this.listById();
  }

  listById(){
    const dadosSalvos = localStorage.getItem('auth_data');

    if (dadosSalvos) {
      const usuarioObj = JSON.parse(dadosSalvos);
      const idUsuario = usuarioObj.id;

      this.solicitacaoService.listById(idUsuario).subscribe({
        next: (lista) => {
          
          // 3. Ordenar: Mais recentes primeiro (Decrescente)
          this.lista = lista.sort((a, b) => {
            const dataA = new Date(a.dataHora).getTime();
            const dataB = new Date(b.dataHora).getTime();
            return dataB - dataA; 
          });

          this.loading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error('Erro detalhado:', err);
          this.loading = false;
          
          if (err.status === 401) {
            alert('Sessão expirada. Por favor, faça login novamente.');
            this.router.navigate(['/login']);
          } 
          else if (err.status === 403) {
            alert('Acesso negado.');
          } 
          else if (err.status === 0) {
            alert('Sem conexão com o servidor.');
          } 
          else {
            const msg = err.error?.message || err.message;
            alert(`Erro: ${msg}`);
          }
        },
      });
    } else {
      // Se não tiver usuário logado, manda pro login
      this.router.navigate(['/login']);
    }
  }
}