import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-manutencao',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './manutencao.html',
  styleUrls: ['./manutencao.css']
})
export class ManutencaoComponent implements OnInit {
  solicitacao: any = null;
  modo: 'visualizar' | 'efetuar' | 'redirecionar' = 'visualizar';
  descricao: string = '';
  orientacoes: string = '';
  funcionario = { id: 1, nome: 'Funcionário Exemplo' }; 
  loading = false;
  error = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadSolicitacao(id);
  }

  //MOCK
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
      manutencoes: [] // histórico
    };

  }

  iniciarEfetuar() {
    this.modo = 'efetuar';
    this.descricao = '';
    this.orientacoes = '';
    this.error = '';
  }

  iniciarRedirecionar() {
    // redireciona para o fluxo RF015 
    const id = this.solicitacao?.id;
    this.router.navigate(['/func/redirecionar', id]);
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

    // atualiza localmente
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
}
