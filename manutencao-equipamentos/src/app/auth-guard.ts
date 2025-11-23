import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './services/loginService'; 

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  const loginService = inject(LoginService);
  const router = inject(Router);
  // Usa o signal para obter o usuário logado
  const usuarioLogado = loginService.usuarioLogado(); 
  const url = state.url;

  // 1. VERIFICAÇÃO PRINCIPAL: Está logado?
  if (usuarioLogado && loginService.isLoggedIn()) {
    // 2. VERIFICAÇÃO DE ROLE: Há um papel (role) obrigatório configurado na rota?
    const requiredRole = route.data['role'];

    // Se a rota não exige nenhuma role específica, permite o acesso.
    if (!requiredRole) {
      return true;
    }

    // Verifica se o papel do usuário (extraído do JWT) é o papel requerido
    if (usuarioLogado.role === requiredRole) {
      return true;
    } else {
      console.warn(`Acesso negado. Usuário ${usuarioLogado.role} tentou acessar ${url} (requer ${requiredRole})`);
      
      // Redireciona para o painel padrão do usuário, se não tiver permissão para a rota solicitada.
      if (usuarioLogado.role === 'FUNCIONARIO' || usuarioLogado.role === 'ADMIN') {
        router.navigate(['/painel']); 
      } else {
        router.navigate(['/dashboard-cliente']); 
      }
      return false;
    }
  }

  // 3. SE NÃO ESTIVER LOGADO: Redireciona para a página de login
  router.navigate(['/login'], { queryParams: { error: "Deve fazer o login para acessar " + url } });
  return false; 
};