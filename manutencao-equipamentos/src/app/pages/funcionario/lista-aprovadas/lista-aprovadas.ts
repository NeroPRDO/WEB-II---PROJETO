import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { SolicitacaoService } from '../../../services/solicitacao';
import { solicitacaoModel } from '../../../models/solicitacaoModel';
import { NavComponent } from '../../../shared/Nav/nav';

@Component({
  selector: 'app-lista-aprovadas',
  standalone: true,
  imports: [CommonModule, RouterLink, NavComponent],
  templateUrl: './lista-aprovadas.html',
  styleUrl: './lista-aprovadas.css'
})
export class ListaAprovadasComponent implements OnInit {

  private solicitacaoService = inject(SolicitacaoService);
  
  // Lista que será exibida na tela
  listaAprovadas: solicitacaoModel[] = [];
  loading = true;

  ngOnInit(): void {
    this.carregarFilaDeTrabalho();
  }

  carregarFilaDeTrabalho() {
    this.solicitacaoService.list().subscribe({
      next: (todasSolicitacoes) => {
        
        // FILTRO CORRIGIDO:
        // Como a solicitação aprovada ainda não tem técnico (o vínculo é só na manutenção),
        // mostramos TODAS as aprovadas para que o técnico possa escolher qual atender.
        this.listaAprovadas = todasSolicitacoes.filter(s => 
          s.estadoChamado === 'APROVADA'
        );

        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar solicitações:', err);
        this.loading = false;
      }
    });
  }
}