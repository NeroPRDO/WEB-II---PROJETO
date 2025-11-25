import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './services/loginService'; 

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  const loginService = inject(LoginService);
  const router = inject(Router);
  const usuarioLogado = loginService.usuarioLogado(); 
  const url = state.url;

  if (usuarioLogado && loginService.isLoggedIn()) {
    const requiredRole = route.data['role'];

    if (!requiredRole) {
      return true;
    }

    if (usuarioLogado.role === requiredRole) {
      return true;
    } else {
      console.warn(`Acesso negado. Usuário ${usuarioLogado.role} tentou acessar ${url} (requer ${requiredRole})`);
      
      if (usuarioLogado.role === 'FUNCIONARIO' || usuarioLogado.role === 'ADMIN') {
        router.navigate(['/painel']); 
      } else {
        router.navigate(['/dashboard-cliente']); 
      }
      return false;
    }
  }

  router.navigate(['/login'], { queryParams: { error: "Deve fazer o login para acessar " + url } });
  return false; 
};