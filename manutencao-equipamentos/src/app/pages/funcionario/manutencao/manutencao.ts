import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

type Modo = 'visualizar' | 'efetuar' | 'redirecionar' | 'finalizar';

@Component({
  selector: 'app-manutencao',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './manutencao.html',
  styleUrls: ['./manutencao.css']
})
export class ManutencaoComponent implements OnInit {
  solicitacao: any = null;

  modo: Modo = 'visualizar';

  descricao: string = '';
  orientacoes: string = '';
  funcionario = { id: 1, nome: 'Funcionário Exemplo' };
  loading = false;
  error = '';

  funcionarios = ['Carlos', 'Ana', 'João', 'Mariana'];
  funcionarioDestino: string = '';

  get manutencoes() {
    return this.solicitacao?.manutencoes ?? [];
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadSolicitacao(id);

    // Detecta sufixo da URL e ajusta o modo
    this.route.url.subscribe((segments: UrlSegment[]) => {
      const last = segments.length ? segments[segments.length - 1]!.path : '';

      if (last === 'efetuar') {
        this.modo = 'efetuar';
      } else if (last === 'redirecionar') {
        this.modo = 'redirecionar';
      } else if (last === 'finalizar') {
        this.modo = 'finalizar';
      } else {
        // Não force visualizar aqui, para não "fechar" o formulário ao clicar nas abas
        // this.modo = 'visualizar';
      }
    });
  }

  setModo(m: Modo) {
    this.modo = m;
    this.error = '';

    if (m === 'efetuar') {
      this.descricao = '';
      this.orientacoes = '';
    }

    if (m === 'redirecionar') {
      this.funcionarioDestino = '';
      const sugestao = this.funcionarios.find(
        f => f !== this.solicitacao?.funcionarioOrigem
      );
      if (sugestao) this.funcionarioDestino = sugestao;
    }
  }

  // MOCK
  loadSolicitacao(id: string | null) {
    this.solicitacao = {
      id: id || 'TEMP-001',
      cliente: {
        nome: 'João da Silva',
        contato: 'joao@email.com',
        telefone: '(41) 99999-0000',
        endereco: 'Rua Exemplo, 100'
      },
      equipamento: {
        tipo: 'Notebook',
        marca: 'Dell',
        modelo: 'Inspiron 15',
        serie: 'SN12345'
      },
      problema: 'Tela quebrada e não liga.',
      dataAbertura: new Date().toISOString(),
      status: 'ABERTO',
      manutencoes: [],             // histórico
      funcionarioOrigem: 'Carlos',
      funcionarioDestino: '',
      historico: [] as any[]
    };
  }

  iniciarEfetuar() {
    this.setModo('efetuar');
  }

  iniciarRedirecionar() {
    this.setModo('redirecionar');
  }

  salvarManutencao() {
    this.error = '';
    if (!this.descricao.trim()) {
      this.error = 'Descrição é obrigatória.';
      return;
    }
    if (!this.orientacoes.trim()) {
      this.error = 'Orientações para o cliente são obrigatórias.';
      return;
    }

    const now = new Date();
    const registro = {
      descricao: this.descricao.trim(),
      orientacoes: this.orientacoes.trim(),
      dataHora: now.toISOString(),
      funcionario: { id: this.funcionario.id, nome: this.funcionario.nome }
    };

    this.solicitacao.manutencoes.push(registro);
    this.solicitacao.status = 'ARRUMADA';
    this.solicitacao.ultimaManutencao = {
      dataHora: registro.dataHora,
      funcionario: registro.funcionario.nome
    };

    alert('Manutenção registrada com sucesso!');
    this.modo = 'visualizar';
  }

  cancelar() {
    this.modo = 'visualizar';
    this.error = '';
  }

  formatDate(iso?: string) {
    return iso ? new Date(iso).toLocaleString() : new Date().toLocaleString();
  }

  // --- RF015 - Redirecionar ---
  redirecionar() {
    this.error = '';

    if (!this.funcionarioDestino) {
      this.error = 'Selecione um funcionário de destino.';
      return;
    }
    if (this.funcionarioDestino === this.solicitacao.funcionarioOrigem) {
      this.error = 'Não é possível redirecionar para si mesmo.';
      return;
    }

    this.solicitacao.status = 'REDIRECIONADA';
    const log = {
      dataHora: new Date().toLocaleString(),
      acao: `Redirecionada de ${this.solicitacao.funcionarioOrigem} para ${this.funcionarioDestino}`
    };
    this.solicitacao.historico.push(log);

    this.solicitacao.funcionarioOrigem = this.funcionarioDestino;
    this.funcionarioDestino = '';
    this.modo = 'visualizar';

    alert('Solicitação redirecionada com sucesso!');
  }

  // --- RF016 - Finalizar ---
  finalizar() {
    this.solicitacao.status = 'FINALIZADA';
    const log = {
      dataHora: new Date().toLocaleString(),
      acao: `Finalizada pelo funcionário ${this.solicitacao.funcionarioOrigem}`
    };
    this.solicitacao.historico.push(log);
    this.modo = 'visualizar';
  }
}
