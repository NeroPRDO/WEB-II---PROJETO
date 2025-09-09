import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { CadastroAtendimento } from './cadastro-atendimento/cadastro-atendimento';
import { Orcamento } from './atendimento/orcamento/orcamento'
import { VisualizarSolicitacao } from './atendimento/visualizar-solicitacao/visualizar-solicitacao';
import { PainelFuncinario } from './painel-funcinario/painel-funcinario';
import { Historico } from './historico/historico';
import { Cadastro } from './cadastro/cadastro';
//import { Sobre } from './sobre/sobre';
//import { Contato } from './contato/contato';

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
    path: 'historico',
    component: Historico,
    title: 'historico',
  },
  
  {
    path: 'cadastro',
    component: Cadastro,
    title: 'cadastro',
  },

  // === Perfil do Funcionário === RASCUNHO
  {
    path: 'func',
    component: PainelFuncinario,
    title: 'painel-funcionario'
  },

  {
    // listagem geral
    path: 'func/solicitacoes',
    component: Historico, //por enquanto
    title: 'lista-solicitacoes'
  },

  {
    // reuso da tela de orçamento, mas dentro do espaço do funcionário
    path: 'func/orcamento/:id',
    component: Orcamento,
    title: 'func-orcamento'
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
