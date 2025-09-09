import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

type Estado = 'ABERTA' | 'ORÇADA' | 'APROVADA' | 'REJEITADA' | 'ARRUMADA' | 'PAGA' | 'FINALIZADA';

interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
}

interface Solicitacao {
  id: string;
  equipamento: string;
  categoria: string;
  defeito: string;
  criadoEm: string; // ISO ou dd/MM/yyyy HH:mm
  estado: Estado;
}

@Component({
  selector: 'app-efetuar-orcamento',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './efetuar-orcamento.html',
  styleUrls: ['./efetuar-orcamento.css'],
})
export class EfetuarOrcamento {
  id: string | null = null;

  // MOCKS (trocar por dados da API quando integrar backend)
  cliente: Cliente = {
    id: 'C-101',
    nome: 'Fulano da Silva',
    email: 'fulano@exemplo.com',
    telefone: '(41) 99999-9999',
  };

  solicitacao: Solicitacao = {
    id: 'S-001',
    equipamento: 'Notebook Lenovo Ideapad 3',
    categoria: 'Notebook',
    defeito: 'Não liga',
    criadoEm: '25/08/2025 10:00',
    estado: 'ABERTA',
  };

  // entrada do orçamento
  valorOrcamento: number | null = null;
  observacao: string = '';

  // contexto do “funcionário logado” (mock)
  funcionarioLogado = 'funcionario.demo@empresa.com';

  constructor(private route: ActivatedRoute, private router: Router) {
    // pega o :id da rota e aplica nos mocks (em produção, buscar na API por id)
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.solicitacao.id = this.id;
    }
  }

  salvarOrcamento() {
    if (this.valorOrcamento == null || this.valorOrcamento <= 0) {
      alert('Informe um valor de orçamento válido.');
      return;
    }

    const agora = new Date();
    const dataHora =
      agora.toLocaleDateString('pt-BR') +
      ' ' +
      agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    //Em algum momento, aqui deve salvar o orçamento na API

    this.solicitacao.estado = 'ORÇADA';

    alert(
      `Orçamento registrado!\n\n` +
        `Solicitação: ${this.solicitacao.id}\n` +
        `Cliente: ${this.cliente.nome}\n` +
        `Valor: R$ ${this.valorOrcamento.toFixed(2)}\n` +
        `Funcionário: ${this.funcionarioLogado}\n` +
        `Data/Hora: ${dataHora}\n\n` +
        `Estado atualizado para: ${this.solicitacao.estado}`
    );

    // navegação simples: voltar ao painel do funcionário
    this.router.navigateByUrl('/func');
  }
}
