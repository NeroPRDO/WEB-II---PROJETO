import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { CadastroAtendimento } from './cadastro-atendimento/cadastro-atendimento';
import { Orcamento } from './atendimento/orcamento/orcamento'
import { VisualizarSolicitacao } from './atendimento/visualizar-solicitacao/visualizar-solicitacao';
import { PainelFuncinario } from './painel-funcinario/painel-funcinario';
import { Historico } from './historico/historico';

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
  }
];
