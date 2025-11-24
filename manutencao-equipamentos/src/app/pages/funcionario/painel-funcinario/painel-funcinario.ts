import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Panel } from '../../../shared/panel/panel';
import { NavComponent } from '../../../shared/Nav/nav';
import { TableChamado } from '../../../shared/table-chamado/table-chamado';
import { PainelAcoesFuncionario } from '../../../shared/painel-acoes-funcionario/painel-acoes-funcionario';
import { ModalComponent } from '../../../shared/novo-modal/novo-modal';
import { EfetuarOrcamento } from '../efetuar-orcamento/efetuar-orcamento';
import { SolicitacaoService } from '../../../services/solicitacao';

export interface Chamado {
  id: string;
  codigo: string;
  cliente: string;
  descricao: string;
  data_chamado: string;
  estado: string;
}

export enum Estados {
  ABERTA = 'ABERTA',
  ORCADA = 'ORÇADA',
  REJEITADA = 'REJEITADA',
  APROVADA = 'APROVADA',
  REDIRECIONADA = 'REDIRECIONADA',
  ARRUMADA = 'ARRUMADA',
  PAGA = 'PAGA',
  FINALIZADA = 'FINALIZADA'
}

@Component({
  selector: 'app-painel-funcinario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Panel,
    NavComponent,
    TableChamado,
    PainelAcoesFuncionario,
    ModalComponent,
    EfetuarOrcamento
  ],
  templateUrl: './painel-funcinario.html',
  styleUrl: './painel-funcinario.css'
})
export class PainelFuncinario implements OnInit {

  private solicitacaoService = inject(SolicitacaoService);

  orcamentoModalVisible = false;
  selectedChamado: any = null;
  chamados: Chamado[] = [];
  chamadosFiltrados: Chamado[] = [];

  filtroEstado: Estados = Estados.ABERTA;
  estadosDisponiveis: Estados[] = Object.values(Estados);

  ngOnInit(): void {
    this.carregarChamados();

    // Subscribe no Observable de atualização
    this.solicitacaoService.chamadosAtualizados$.subscribe(() => {
      console.log('Recarregando...');
      this.carregarChamados(); 
    });
  }

  carregarChamados() {
    this.solicitacaoService.list().subscribe({
      next: (res) => {
        this.chamados = res.map(s => ({
          id: s.id.toString(),
          codigo: s.id.toString(),  // se quiser mudar, coloque outro campo
          cliente: s.usuario?.nome ?? 'Sem nome',
          descricao:
            s.descricao.length > 27
              ? s.descricao.substring(0, 27) + '...'
              : s.descricao,
          data_chamado: new Date(s.dataHora).toLocaleDateString('pt-BR'),
          estado: s.estadoChamado
        }));

        this.aplicarFiltro();
      },
      error: (err) => {
        console.error('Erro ao carregar chamados', err);
      }
    });
  }

  onFiltroChange() {
    this.aplicarFiltro();
  }

  aplicarFiltro() {
    this.chamadosFiltrados = this.chamados.filter(
      c => c.estado === this.filtroEstado
    );
  }

  openOrcamentoModal(row: any) {
    this.orcamentoModalVisible = true;
    this.selectedChamado = row.id;
  }

  closeOrcamentoModal(refreshNeeded: boolean = false) {
    this.orcamentoModalVisible = false;
    this.selectedChamado = null;
    if (refreshNeeded) {
        // notificamos o serviço, que por sua vez acionará o subscribe.
        this.solicitacaoService.notificarAtualizacao(); 
    }
  }
}
