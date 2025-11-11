import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';

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

  // Rotas publicas
  {
    path: 'login',
    component: Login,
    title: 'login',
  },

  {
    path: 'cadastro',
    component: Cadastro,
    title: 'cadastro',
  },

  // Rotas Cliente
  {
    path: '',
    component: Dashboard,
    title: 'dashboard',
    canActivate: [authGuard],      // Proteger
    data: { role: 'CLIENTE' }       // Definir role
  },
  {
    path: 'pagamento',
    component: Pagamento,
    title: 'pagamento',
    canActivate: [authGuard],
    data: { role: 'CLIENTE' }
  },
  {
    path: 'servicos',
    component: Servicos,
    title: 'servicos',
    canActivate: [authGuard],
    data: { role: 'CLIENTE' }
  },
  {
    path: 'cadastro-atendimento',
    component: CadastroAtendimento,
    title: 'cadatro-atendimento',
    canActivate: [authGuard],
    data: { role: 'CLIENTE' }
  },
  {
    path: 'visualizar-servico',
    component: VisualizarServico,
    title: 'visualizar-servico',
    canActivate: [authGuard],
    data: { role: 'CLIENTE' }
  },
  {
    path: 'historico',
    component: Historico,
    title: 'historico',
    canActivate: [authGuard],
    data: { role: 'CLIENTE' }
  },
  
  // Rotas Funcionario
  {
    path: 'orcamento/:id',
    component: Orcamento,
    title: 'orcamento',
    canActivate: [authGuard],
    data: { role: 'FUNCIONARIO' }
  },

  {
    path: 'painel',
    component: PainelFuncinario,
    title: 'painel-funcionario',
    canActivate: [authGuard],
    data: { role: 'FUNCIONARIO' }
  },

  {
    path: 'solicitacao/:id',
    component: VisualizarSolicitacao,
    title: 'visualizar-solicitacao',
    canActivate: [authGuard],
    data: { role: 'FUNCIONARIO' }
  },
  {
    path: 'func/orcamento',
    component: EfetuarOrcamento,
    title: 'efetuar-orcamento',
    canActivate: [authGuard],
    data: { role: 'FUNCIONARIO' }
  },

  {
    path: 'func/orcamento/:id',
    component: EfetuarOrcamento,
    title: 'efetuar-orcamento',
    canActivate: [authGuard],
    data: { role: 'FUNCIONARIO' }
  },

  {
    path: 'func',
    component: PainelFuncinario,
    title: 'painel-funcionario',
    canActivate: [authGuard],
    data: { role: 'FUNCIONARIO' }  
  },

  {
    path: 'func/funcionarios',
    component: ManterFuncionario,
    title: 'manter-funcionario',
    canActivate: [authGuard],
    data: { role: 'FUNCIONARIO' }
  },

  {
    path: 'func/categorias',
    component: ManterCategoria,
    title: "manter-categoria",
    canActivate: [authGuard],
    data: { role: 'FUNCIONARIO' }
  },

  {
    path: 'func/manutencao',
    component: ManutencaoComponent,
    title: 'manutencao',
    canActivate: [authGuard],
    data: { role: 'FUNCIONARIO' }
  },

  {
    path: 'func/manutencao/:id',
    component: ManutencaoComponent,
    title: 'detalhe-manutencao',
    canActivate: [authGuard],
    data: { role: 'FUNCIONARIO' }
  },

  {
  path: 'func/manutencao/:id/efetuar',
  component: ManutencaoComponent,
  title: 'efetuar-manutencao',
  canActivate: [authGuard],
  data: { role: 'FUNCIONARIO' }
},

{
  path: 'func/manutencao/:id/redirecionar',
  component: ManutencaoComponent,
  title: 'redirecionar-manutencao',
  canActivate: [authGuard],
  data: { role: 'FUNCIONARIO' }
},

{
  path: 'func/manutencao/:id/finalizar',
  component: ManutencaoComponent,
  title: 'finalizar-manutencao',
  canActivate: [authGuard],
  data: { role: 'FUNCIONARIO' }
},

  {
  path: 'func/relatorios/receitas',
  component: RelatorioReceitas,
  title: 'relatorio-receitas',
  canActivate: [authGuard],
    data: { role: 'FUNCIONARIO' }
},

{
  path: 'func/relatorios/receitas-categoria',
  component: RelatorioReceitasCategoria,
  title: 'relatorio-receitas-categoria',
  canActivate: [authGuard],
  data: { role: 'FUNCIONARIO' }
},

{
  path: 'func/relatorios',
  loadComponent: () =>
  import('./pages/funcionario/relatorios-home/relatorios-home').then(
        (m) => m.RelatoriosHomeComponent),
        canActivate: [authGuard],
        data: { role: 'FUNCIONARIO' }
 },

 { path: '**', redirectTo: 'login' },

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
