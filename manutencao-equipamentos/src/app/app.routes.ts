import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { CadastroAtendimento } from './cadastro-atendimento/cadastro-atendimento';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard,
        title: 'dashboard'
    },
    {
        path: 'login',
        component: Login,
        title: 'login'
    },
    {
        path: 'cadastro-atendimento',
        component: CadastroAtendimento,
        title: 'cadatro-atendimento'
    }

];
