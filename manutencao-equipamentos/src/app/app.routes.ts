import { Routes } from '@angular/router';
import { Login } from './pages/logar/login/login';
import { CadastroAtendimento } from './pages/cliente/cadastro-atendimento/cadastro-atendimento';
import { Orcamento } from './pages/funcionario/atendimento/orcamento/orcamento'
import { VisualizarSolicitacao } from './pages/funcionario/atendimento/visualizar-solicitacao/visualizar-solicitacao';
import { VisualizarServico } from './pages/cliente/visualizar-servico/visualizar-servico';

import { Historico } from './pages/cliente/historico/historico';
import { Cadastro } from './pages/logar/cadastro/cadastro';
import { EfetuarOrcamento } from './pages/funcionario/efetuar-orcamento/efetuar-orcamento';
import { Servicos } from './pages/cliente/servicos/servicos';
import { ManutencaoComponent } from './pages/funcionario/manutencao/manutencao';
import { Pagamento } from './pages/cliente/pagamento/pagamento';
import { RelatorioReceitasCategoria } from './pages/funcionario/relatorios/relatorio-receitas-categoria/relatorio-receitas-categoria';

import { ManterCategoria } from './pages/funcionario/manter-categoria/manter-categoria';
import { Dashboard } from './pages/cliente/dashboard/dashboard';
import { PainelFuncinario } from './pages/funcionario/painel-funcinario/painel-funcinario';
import { ManterFuncionario } from './pages/funcionario/manter-funcionario/manter-funcionario';
import { RelatorioReceitas } from './pages/funcionario/relatorios/relatorios-receitas/relatorio-receitas';

export const routes: Routes = [

  {
    path: '',
    component: Dashboard,
    title: 'dashboard',
  },

  {
    path: 'login',
    component: Login,
    title: 'login',
  },
  {
    path: 'pagamento',
    component: Pagamento,
    title: 'pagamento',
  },
  {
    path: 'servicos',
    component: Servicos,
    title: 'servicos',
  },

  {
    path: 'cadastro-atendimento',
    component: CadastroAtendimento,
    title: 'cadatro-atendimento',
  },

  {
    path: 'orcamento/:id',
    component: Orcamento,
    title: 'orcamento',
  },

  {
    path: 'painel',
    component: PainelFuncinario,
    title: 'painel-funcionario'
  },

  {
    path: 'solicitacao/:id',
    component: VisualizarSolicitacao,
    title: 'visualizar-solicitacao',
  },

  {
    path: 'visualizar-servico',
    component: VisualizarServico, //Dar uma olhada RF008
    title: 'visualizar-servico',
  },

  {
    path: 'historico',
    component: Historico,
    title: 'historico',
  },

  {
    path: 'cadastro',
    component: Cadastro,
    title: 'cadastro',
  },

  {
    path: 'func/orcamento',
    component: EfetuarOrcamento,
    title: 'efetuar-orcamento',
  },

  {
    path: 'func/orcamento/:id',
    component: EfetuarOrcamento,
    title: 'efetuar-orcamento',
  },

  {
    path: 'func',
    component: PainelFuncinario,
    title: 'painel-funcionario'
  },

  {
    path: 'func/funcionarios',
    component: ManterFuncionario,
    title: 'manter-funcionario'
  },
  {
    path: 'func/categorias',
    component: ManterCategoria,
    title: "manter-categoria"
  },
  {
    path: 'func/manutencao',
    component: ManutencaoComponent,
    title: 'manutencao'
  },

  {
    path: 'func/manutencao/:id',
    component: ManutencaoComponent,
    title: 'detalhe-manutencao'
  },

  {
  path: 'func/manutencao/:id/efetuar',
  component: ManutencaoComponent,
  title: 'efetuar-manutencao'
},
{
  path: 'func/manutencao/:id/redirecionar',
  component: ManutencaoComponent,
  title: 'redirecionar-manutencao'
},
{
  path: 'func/manutencao/:id/finalizar',
  component: ManutencaoComponent,
  title: 'finalizar-manutencao'
},

  {
  path: 'func/relatorios/receitas',
  component: RelatorioReceitas,
  title: 'relatorio-receitas'
},
{
  path: 'func/relatorios/receitas-categoria',
  component: RelatorioReceitasCategoria,
  title: 'relatorio-receitas-categoria'
},

{
  path: 'func/relatorios',
  loadComponent: () =>
  import('./pages/funcionario/relatorios-home/relatorios-home').then(
        (m) => m.RelatoriosHomeComponent      ),
 },

  // === Perfil do Funcionário === RASCUNHO

  {
    // listagem geral
    path: 'func/solicitacoes',
    component: Historico, //por enquanto
    title: 'lista-solicitacoes'
  },

  {
    // reuso da tela de visualizar
    path: 'func/solicitacao/:id',
    component: VisualizarSolicitacao, //por enquanto
    title: 'func-visualizar-solicitacao'
  },

  {
    // opcional: funcionário abrindo um novo chamado
    path: 'func/cadastro-atendimento',
    component: CadastroAtendimento,
    title: 'func-cadastro-atendimento'
  },

  /*  
    { 
      path: 'sobre', 
      component: Sobre, 
      title: 'sobre' 
    },
  
    { 
      path: 'contato', 
      component: Contato, 
      title: 'contato' 
    },
  */
];
