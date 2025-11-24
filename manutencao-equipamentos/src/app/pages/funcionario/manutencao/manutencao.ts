import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NavComponent } from '../../../shared/Nav/nav';
import { SolicitacaoService } from '../../../services/solicitacao'; // Para carregar dados

import { solicitacaoModel } from '../../../models/solicitacaoModel';
import { FinalizarManutencaoRequest, ManutencaoRequest, ManutencaoService } from '../../../services/manutencaoService';
import { funcService } from '../../../services/funcService';

@Component({
  selector: 'app-manutencao',
  standalone: true,
  imports: [NavComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './manutencao.html',
  styleUrl: './manutencao.css'
})
export class ManutencaoComponent implements OnInit {
  private funcService = inject(funcService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  
  // INJEÇÕES:
  private solicitacaoService = inject(SolicitacaoService); // Para ler (GET)
  private manutencaoService = inject(ManutencaoService);   // Para escrever (POST)

  solicitacao?: solicitacaoModel;
  funcionarios: any[] = []; 
  modo: 'MANUTENCAO' | 'REDIRECIONAR' | 'FINALIZAR' = 'MANUTENCAO';
  
  manutencaoForm: FormGroup;
  redirecionarForm: FormGroup;

  constructor() {
    this.manutencaoForm = this.fb.group({
      descricaoManutencao: ['', [Validators.required, Validators.minLength(5)]],
      orientacoesCliente: ['', Validators.required]
    });

    this.redirecionarForm = this.fb.group({
      funcionarioDestino: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const idUrl = this.route.snapshot.paramMap.get('id');
    if (idUrl) {
      this.carregarSolicitacao(Number(idUrl));
      this.carregarFuncionarios();
    } else {
      this.router.navigate(['/func/painel']);
    }
  }

  carregarSolicitacao(id: number) {
    // Continua usando o SolicitacaoService para buscar os dados
    this.solicitacaoService.findById(id).subscribe({
      next: (dados) => this.solicitacao = dados,
      error: () => alert('Erro ao carregar solicitação.')
    });
  }

  carregarFuncionarios() {
    // Pega ID do usuário logado para não se redirecionar para si mesmo
    const dadosLocal = localStorage.getItem('auth_data');
    const idLogado = dadosLocal ? JSON.parse(dadosLocal).id : 0;

    // 3. Chamada Real ao Backend
    this.funcService.getFuncionarios().subscribe({
      next: (lista) => {
        // Filtra para remover o próprio usuário logado da lista de destino
        this.funcionarios = lista.filter(f => f.id !== idLogado);
      },
      error: (err) => {
        console.error('Erro ao buscar funcionários:', err);
        // Se der erro, a lista fica vazia ou mostra um alerta
        alert('Não foi possível carregar a lista de técnicos.');
      }
    });
  }

  // --- AQUI MUDAMOS PARA USAR O NOVO SERVICE ---

  salvarManutencao() {
    if (this.manutencaoForm.invalid || !this.solicitacao) {
      this.manutencaoForm.markAllAsTouched();
      return;
    }
    const usuarioLogado = this.getUsuarioLogado();
    if (!usuarioLogado) return;

    const dto: ManutencaoRequest = {
      solicitacaoId: this.solicitacao.id,
      funcionarioId: usuarioLogado.id,
      descricao: this.manutencaoForm.value.descricaoManutencao,
      orientacoes: this.manutencaoForm.value.orientacoesCliente
    };

    // USANDO O NOVO SERVICE
    this.manutencaoService.iniciarManutencao(dto).subscribe({
      next: () => {
        alert('Manutenção registrada com sucesso!');
        this.router.navigate(['/func']);
      },
      error: (err) => console.error(err)
    });
  }

  salvarRedirecionamento() {
    if (this.redirecionarForm.invalid || !this.solicitacao) return;

    const dto: ManutencaoRequest = {
      solicitacaoId: this.solicitacao.id,
      funcionarioId: Number(this.redirecionarForm.value.funcionarioDestino)
    };

    // USANDO O NOVO SERVICE
    this.manutencaoService.trocarFuncionario(dto).subscribe({
      next: () => {
        alert('Redirecionado com sucesso!');
        this.router.navigate(['/func']);
      },
      error: (err) => console.error(err)
    });
  }

  finalizarSolicitacao() {
    if (!this.solicitacao) return;
    if (!confirm('Finalizar solicitação?')) return;

    const usuarioLogado = this.getUsuarioLogado();
    if (!usuarioLogado) return;

    const dto: FinalizarManutencaoRequest = {
      solicitacaoId: this.solicitacao.id,
      funcionarioId: usuarioLogado.id
    };

    // USANDO O NOVO SERVICE
    this.manutencaoService.finalizarManutencao(dto).subscribe({
      next: () => {
        alert('Solicitação finalizada!');
        this.router.navigate(['/func']);
      },
      error: (err) => console.error(err)
    });
  }

  private getUsuarioLogado() {
    const dadosLocal = localStorage.getItem('auth_data');
    if (!dadosLocal) return null;
    return JSON.parse(dadosLocal);
  }
}