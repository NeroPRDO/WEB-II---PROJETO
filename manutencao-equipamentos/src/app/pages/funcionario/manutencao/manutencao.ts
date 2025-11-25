import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NavComponent } from '../../../shared/Nav/nav';
import { SolicitacaoService } from '../../../services/solicitacao'; // Para carregar dados

import { solicitacaoModel } from '../../../models/solicitacaoModel';
import { FinalizarManutencaoRequest, ManutencaoRequest, ManutencaoService } from '../../../services/manutencaoService';
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
  modo: 'INICIAR' | 'MANUTENCAO' | 'REDIRECIONAR' = 'INICIAR';
  
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
        
        // === LÓGICA DE MODOS ===
        // Se já iniciou: Vai para o Relatório (e habilita aba Redirecionar)
        if (this.solicitacao.estadoChamado === 'EM_ANDAMENTO') {
          this.modo = 'MANUTENCAO';
        } 
        // Se ainda não iniciou: Vai para tela de Início (e esconde o resto)
        else if (this.solicitacao.estadoChamado === 'APROVADA') {
          this.modo = 'INICIAR';
        } 
        else {
          // Outros estados (Finalizada, etc), volta pro painel ou mostra apenas visualização
          // Aqui deixo em manutenção para permitir visualização se necessário
          this.modo = 'MANUTENCAO'; 
        }
      },
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

  iniciarTrabalho() {
    if (!this.solicitacao) return;
    const usuarioLogado = this.getUsuarioLogado();
    if (!usuarioLogado) return;

    // Usa a interface específica para o endpoint /iniciar
    const dto: IniciarManutencaoRequest = {
      idf_funcionarioAtual: usuarioLogado.id,
      idf_solicitacao: this.solicitacao.id
    };

    this.manutencaoService.iniciarManutencao(dto as any).subscribe({
      next: () => {
        alert('Manutenção iniciada com sucesso!');
        
        // Atualiza estado localmente para a UI reagir
        if (this.solicitacao) this.solicitacao.estadoChamado = 'EM_ANDAMENTO';
        
        // Troca para a aba de preencher o relatório
        this.modo = 'MANUTENCAO';
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao iniciar manutenção.');
      }
    });
  }

  // 2. SALVAR/CONCLUIR MANUTENÇÃO (Preenche descrição e orientações)
  salvarManutencao() {
    if (this.manutencaoForm.invalid || !this.solicitacao) {
      this.manutencaoForm.markAllAsTouched();
      return;
    }
    const usuarioLogado = this.getUsuarioLogado();
    if (!usuarioLogado) return;

    // DTO genérico (antigo) para salvar os textos
    // Nota: Certifique-se que seu backend tem endpoint para atualizar/salvar isso
    const dto: ManutencaoRequest = {
      solicitacaoId: this.solicitacao.id,
      funcionarioId: usuarioLogado.id,
      descricao: this.manutencaoForm.value.descricaoManutencao,
      orientacoes: this.manutencaoForm.value.orientacoesCliente
    };

    // Supondo que você tenha um método para salvar os detalhes (ex: update ou finalizar)
    // Se não tiver, use o finalizarManutencao ou crie um endpoint de update
    this.manutencaoService.finalizarManutencao(dto as any).subscribe({
      next: () => {
        alert('Manutenção registrada e finalizada!');
        this.router.navigate(['/func']);
      },
      error: (err) => console.error(err)
    });
  }

  // 3. REDIRECIONAR
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