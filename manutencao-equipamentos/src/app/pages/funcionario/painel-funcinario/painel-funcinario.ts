import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Panel } from '../../../shared/panel/panel';
import { NavComponent } from '../../../shared/Nav/nav';
import { TableChamado } from '../../../shared/table-chamado/table-chamado';
import { PainelAcoesFuncionario } from '../../../shared/painel-acoes-funcionario/painel-acoes-funcionario';
import { ModalComponent } from '../../../shared/novo-modal/novo-modal';

import { EfetuarOrcamento } from '../efetuar-orcamento/efetuar-orcamento';
import { FinalizarSolicitacaoRequest, SolicitacaoService } from '../../../services/solicitacao';
import { Router, RouterLink } from '@angular/router';

export interface Chamado {
  id: string;
  codigo: string;
  cliente: string;
  descricao: string;
  data_chamado: string;
  estado: string;
}

@Component({
  selector: 'app-painel-funcinario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Panel,
    NavComponent,
    TableChamado,
    PainelAcoesFuncionario,
    ModalComponent,
    EfetuarOrcamento,
    RouterLink
  ],
  templateUrl: './painel-funcinario.html',
  styleUrl: './painel-funcinario.css'
})
export class PainelFuncinario implements OnInit {

  private solicitacaoService = inject(SolicitacaoService);
  private router = inject(Router)

  chamados: Chamado[] = [];
  chamadosFiltrados: Chamado[] = [];

  filtroSelecionado: 'TODOS' | 'HOJE' | 'PERIODO' = 'TODOS';
  filtroStatus: string = '';
  dataInicio: string | null = null;
  dataFim: string | null = null;

  orcamentoModalVisible = false;
  finalizarModalVisible = false;
  selectedChamado: string | null = null;

  finalizarForm = new FormGroup({
    descricaoManutencao: new FormControl('', Validators.required),
    orientacao: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.carregarChamados();
    this.solicitacaoService.chamadosAtualizados$.subscribe(() => this.carregarChamados());
  }

  carregarChamados() {
    this.solicitacaoService.list().subscribe({
      next: (res) => {
        this.chamados = res.map(s => ({
          id: s.id.toString(),
          codigo: s.id.toString(),
          cliente: s.usuario?.nome ?? 'Sem nome',
          descricao: s.descricao.length > 27 ? s.descricao.substring(0, 27) + '...' : s.descricao,
          data_chamado: new Date(s.dataHora).toISOString().split('T')[0],
          estado: s.estadoChamado
        }));

        this.aplicarFiltro();
      },
      error: (err) => {
        console.error('Erro ao carregar chamados', err);
      }
    });
  }


  filtroData: string = '';
  onFiltroChange(event: any) {
    this.filtroSelecionado = event.target.value;
    this.aplicarFiltro();
  }

  onStatusChange(e: any) {
    const v = e?.target?.value;
    this.filtroStatus = (v === 'TODOS' || v === '' || v == null) ? '' : v;
    this.aplicarFiltro();
  }

  onPeriodoChange(event: any) {
    this.filtroSelecionado = event.target.value;
    this.aplicarFiltro();
  }

  onFiltroPeriodoChange(event: any) {
    const value = event.target.value;
    this.filtroData = value;
    this.aplicarFiltro();
  }

  onDataChange() {
    if (this.dataInicio && this.dataFim) {
      this.aplicarFiltro();
    }
  }

  aplicarFiltro() {
    let filtrados = [...this.chamados];

    if (this.filtroStatus && this.filtroStatus.trim() !== '') {
      filtrados = filtrados.filter(c => c.estado === this.filtroStatus);
    }

    if (this.filtroSelecionado === 'HOJE') {
      const hoje = new Date().toLocaleDateString('pt-BR');
      filtrados = filtrados.filter(c => {
        const dataFormatada = new Date(c.data_chamado).toLocaleDateString('pt-BR');
        return dataFormatada === hoje;
      });
    }


    if (this.filtroSelecionado === 'PERIODO' && this.dataInicio && this.dataFim) {
      const inicio = new Date(this.dataInicio);
      const fim = new Date(this.dataFim);
      filtrados = filtrados.filter(c => {
        const dataChamado = new Date(c.data_chamado.split('/').reverse().join('-'));
        return dataChamado >= inicio && dataChamado <= fim;
      });
    }

    this.chamadosFiltrados = filtrados;
  }

  openOrcamentoModal(row: any) {
    this.selectedChamado = row.id;
    this.orcamentoModalVisible = true;
  }

  closeOrcamentoModal(refresh: boolean = false) {
    this.orcamentoModalVisible = false;
    this.selectedChamado = null;

    if (refresh) {
      this.solicitacaoService.notificarAtualizacao();
    }
  }

  openFinalizarModal(row: any) {
    this.selectedChamado = row.id;
    this.finalizarForm.reset();
    this.finalizarModalVisible = true;
  }

  closeFinalizarModal() {
    this.finalizarModalVisible = false;
    this.selectedChamado = null;
    this.finalizarForm.reset();
  }

  confirmarFinalizarManutencao() {
    if (this.finalizarForm.invalid || !this.selectedChamado) return;

    const dadosSalvos = localStorage.getItem('auth_data');
    if (!dadosSalvos) {
      this.router.navigate(['/login']);
      return;
    }

    const usuarioObj = JSON.parse(dadosSalvos);
    const idUsuario = usuarioObj.id;

    const dto: FinalizarSolicitacaoRequest = {
      idSolicitacao: Number(this.selectedChamado),
      idFuncionario: Number(idUsuario)
    };

    this.solicitacaoService.finalizarManutencao(dto).subscribe({
      next: () => {
        alert('Manutenção finalizada com sucesso!');
        this.closeFinalizarModal();
        this.solicitacaoService.notificarAtualizacao();
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao finalizar manutenção.');
      }
    });
  }
}
