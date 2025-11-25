import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NavComponent } from '../../../shared/Nav/nav';
import { SolicitacaoService } from '../../../services/solicitacao'; 

import { solicitacaoModel } from '../../../models/solicitacaoModel';
import { FinalizarRequest, ManutencaoRequest, ManutencaoService } from '../../../services/manutencaoService';
import { funcService } from '../../../services/funcService';
import { IniciarManutencaoRequest } from '../../../models/manutencaoRequest';

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
  modo: 'INICIAR' | 'MANUTENCAO' | 'REDIRECIONAR' | null = null;
  
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
    this.solicitacaoService.findById(id).subscribe({
      next: (dados) => {
        this.solicitacao = dados;
        this.atualizarModoPorEstado();
      },
      error: () => alert('Erro ao carregar solicitação.')
    });
  }

  atualizarModoPorEstado() {
    if (!this.solicitacao) return;
    
    const estado = this.solicitacao.estadoChamado;

    // 1. Se já começou ou foi redirecionada -> Vai para tela de Manutenção (sem botão Iniciar)
    if (estado === 'EM_ANDAMENTO' || estado === 'REDIRECIONADA') {
      this.modo = 'MANUTENCAO';
    } 
    // 2. Se foi aprovada e ninguém pegou -> Vai para tela de Iniciar
    else if (estado === 'APROVADA') {
      this.modo = 'INICIAR';
    } 
    // 3. Outros estados (Aberto, Finalizada) -> Apenas visualização
    else {
      this.modo = null; 
    }
  }

  carregarFuncionarios() {
    const dadosLocal = localStorage.getItem('auth_data');
    const idLogado = dadosLocal ? JSON.parse(dadosLocal).id : 0;

    this.funcService.getFuncionarios().subscribe({
      next: (lista) => {
        this.funcionarios = lista.filter(f => f.id !== idLogado);
      },
      error: (err) => {
        console.error('Erro ao buscar funcionários:', err);
        alert('Não foi possível carregar a lista de técnicos.');
      }
    });
  }

  iniciarTrabalho() {
    if (!this.solicitacao) return;
    const usuarioLogado = this.getUsuarioLogado();
    if (!usuarioLogado) return;

    const dto: IniciarManutencaoRequest = {
      idf_funcionarioAtual: usuarioLogado.id,
      idf_solicitacao: this.solicitacao.id
    };

    this.manutencaoService.iniciarManutencao(dto as any).subscribe({
      next: () => {
        alert('Manutenção iniciada com sucesso!');
        
        if (this.solicitacao) this.solicitacao.estadoChamado = 'EM_ANDAMENTO';
        
        this.modo = 'MANUTENCAO';
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao iniciar manutenção.');
      }
    });
  }

  salvarManutencao() {
    if (this.manutencaoForm.invalid || !this.solicitacao) {
      this.manutencaoForm.markAllAsTouched();
      return;
    }
    
    // Nota: O JSON que você mandou não pede ID do funcionário, 
    // então removi. Se precisar, adicione conforme o backend pedir.

    const dto: FinalizarRequest = {
      idf_solicitacao: this.solicitacao.id,
      descricacaoManuntencao: this.manutencaoForm.value.descricaoManutencao,
      orientacao: this.manutencaoForm.value.orientacoesCliente
    };

    console.log('Enviando Finalização:', dto);

    this.manutencaoService.finalizarManutencao(dto).subscribe({
      next: () => {
        alert('Manutenção registrada e finalizada!');
        this.router.navigate(['/func']);
      },
      error: (err) => {
        console.error('Erro ao finalizar:', err);
        alert('Erro ao salvar manutenção.');
      }
    });
  }

  salvarRedirecionamento() {
    if (this.redirecionarForm.invalid || !this.solicitacao) return;

    const dto: IniciarManutencaoRequest = {
      idf_solicitacao: this.solicitacao.id,
      idf_funcionarioAtual: Number(this.redirecionarForm.value.funcionarioDestino)
    };

    this.manutencaoService.trocarFuncionario(dto as any).subscribe({
      next: () => {
        alert('Redirecionado com sucesso!');
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