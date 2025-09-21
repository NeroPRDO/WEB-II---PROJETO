import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

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


function getById(list: any[], id: string) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return i;
    }
  }
  return null;
}

@Component({
  selector: 'app-efetuar-orcamento',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './efetuar-orcamento.html',
  styleUrls: ['./efetuar-orcamento.css'],
})
export class EfetuarOrcamento {
  @Input() id: string = "";

  dados: any;

  // MOCKS (trocar por dados da API quando integrar backend)
  clientes: Cliente[] = [
    {
      id: '1',
      nome: 'Maria Fernanda',
      email: 'fulano@exemplo.com',
      telefone: '(41) 99999-9999',
    },
    {
      id: '2',
      nome: 'Lucas',
      email: 'fulano@exemplo.com',
      telefone: '(41) 99999-9999',
    }
  ];

  solicitacoes: Solicitacao[] = [
    {
      id: '1',
      equipamento: 'Notebook Lenovo Ideapad 3',
      categoria: 'Notebook',
      defeito: 'Não liga',
      criadoEm: '25/08/2025 10:00',
      estado: 'ABERTA'
    },
    {
      id: '2',
      equipamento: 'Notebook Lenovo Ideapad 3',
      categoria: 'Notebook',
      defeito: 'Não liga',
      criadoEm: '25/08/2025 10:00',
      estado: 'ABERTA'
    }
  ];

  ngOnInit(): void {
    if (!this.id) {
      console.error("ID não foi fornecido para o componente EfetuarOrcamento.");
      return;
    }

    const cliente_index = getById(this.clientes, this.id);
    const solicitacao_index = getById(this.solicitacoes, this.id); // <-- FIX: Search the correct array

    // FIX: Check for null explicitly. An index of 0 is valid but falsy.
    if (cliente_index !== null && solicitacao_index !== null) {
      // FIX: Use 'this' to assign to class properties
      this.dados = {
        "cliente": this.clientes[cliente_index],
        "solicitacao": this.solicitacoes[solicitacao_index]
      };
    } else {
      console.error(`Não foi possível encontrar cliente ou solicitação para o ID: ${this.id}`);
    }
  }

  // entrada do orçamento
  valorOrcamento: number | null = null;
  observacao: string = '';

  // contexto do “funcionário logado” (mock)
  funcionarioLogado = 'funcionario.demo@empresa.com';

  constructor(private route: ActivatedRoute, private router: Router) {
    // pega o :id da rota e aplica nos mocks (em produção, buscar na API por id)
    //this.id = this.route.snapshot.paramMap.get('id');

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

    //this.solicitacao.estado = 'ORÇADA';

    //alert(
    //  `Orçamento registrado!\n\n` +
    //  `Solicitação: ${this.solicitacao.id}\n` +
    //  `Cliente: ${this.cliente.nome}\n` +
    //  `Valor: R$ ${this.valorOrcamento.toFixed(2)}\n` +
    //  `Funcionário: ${this.funcionarioLogado}\n` +
    //  `Data/Hora: ${dataHora}\n\n` +
    //  `Estado atualizado para: ${this.solicitacao.estado}`
    //);

    // navegação simples: voltar ao painel do funcionário
    this.router.navigateByUrl('/func');
  }
}
