import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SolicitacaoService } from '../../../services/solicitacao';
import { OrcamentoRequest } from '../../../models/orcamentoRequestModel';
import { OrcamentoService } from '../../../services/orcamentoService';

@Component({
  selector: 'app-efetuar-orcamento',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './efetuar-orcamento.html',
  styleUrls: ['./efetuar-orcamento.css'],
})
export class EfetuarOrcamento {
  @Input() id: string = "";
  @Output() close = new EventEmitter<void>();

  valorOrcamento: number | null = null;
  observacao: string = '';

  dados: any = null;

  constructor(
    private solicitacaoService: SolicitacaoService,
    private orcamentoService: OrcamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.id) return;

    this.solicitacaoService.findById(Number(this.id)).subscribe({
      next: (resp) => {
        this.dados = {
          solicitacao: {
            id: resp.id,
            equipamento: resp.descricaoEquipamentos,
            categoria: resp.idCategoria,
            defeito: resp.descricao,
            criadoEm: resp.dataHora,
            estado: resp.estadoChamado
          },
          cliente: {
            id: resp.usuario.id,
            nome: resp.usuario.nome,
            email: resp.usuario.email,
            telefone: resp.usuario.idCategoria ?? "Não informado"
          }
        };
      },
      error: (err) => console.error("Erro ao carregar solicitação", err)
    });
  }

  closeModal() {
    this.close.emit();
  }

  cancelar() {
    this.close.emit();
  }

  salvarOrcamento() {
    if (!this.valorOrcamento || this.valorOrcamento <= 0) {
      alert('Informe um valor válido.');
      return;
    }

    if (!this.dados) {
      alert("Os dados da solicitação ainda não foram carregados.");
      return;
    }

    // 🔥 PEGAR DADOS DO FUNCIONÁRIO LOGADO
    const dadosSalvos = localStorage.getItem('auth_data');
    if (!dadosSalvos) {
      alert("Erro: usuário não logado.");
      return;
    }

    const usuarioObj = JSON.parse(dadosSalvos);
    const idFuncionario = usuarioObj.id;

    // 🔥 Montar o payload igual ao Swagger
    const payload: OrcamentoRequest = {
      solicitaoId: this.dados.solicitacao.id,
      usuarioId: this.dados.cliente.id,
      funcionarioId: idFuncionario,
      desc_Solicitacao: this.observacao,
      valorOrcamento: this.valorOrcamento
    };

    console.log("payload => ", payload)
    this.orcamentoService.create(payload).subscribe({
      next: () => {
        alert("Orçamento criado com sucesso!");
        this.close.emit(); // fecha modal
      },
      error: (err) => {
        console.error("Erro ao salvar orçamento", err);
        alert("Erro ao criar orçamento.");
      }
    });
  }
}
