import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { NavComponent } from '../../../shared/Nav/nav';
import { SolicitacaoService } from '../../../services/solicitacao';
import { solicitacaoModel } from '../../../models/solicitacaoModel';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent, RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  lista: solicitacaoModel[] = [];
  loading = true;

  private solicitacaoService = inject(SolicitacaoService);
  private router = inject(Router);


ngOnInit(): void {
  this.carregarLista();
}


  carregarLista(): void {
    const dadosSalvos = localStorage.getItem('auth_data');
    if (!dadosSalvos) {
      this.router.navigate(['/login']);
      return;
    }

    const usuarioObj = JSON.parse(dadosSalvos);
    const idUsuario = usuarioObj.id;

    this.loading = true;
    this.solicitacaoService.listById(idUsuario).subscribe({
      next: (lista) => {
        this.lista = lista.sort((a, b) => new Date(b.dataHora).getTime() - new Date(a.dataHora).getTime());
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro detalhado:', err);
        this.loading = false;

        if (err.status === 401) {
          alert('Sessão expirada. Faça login novamente.');
          this.router.navigate(['/login']);
        } else if (err.status === 403) {
          alert('Acesso negado.');
        } else if (err.status === 0) {
          alert('Sem conexão com o servidor.');
        } else {
          const msg = err.error?.message || err.message;
          alert(`Erro: ${msg}`);
        }
      }
    });
  }

}
