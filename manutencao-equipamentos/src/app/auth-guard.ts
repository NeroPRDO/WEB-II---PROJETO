import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { LoginService } from './services/login-service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  //const loginService = inject(LoginService);
  const router = inject(Router);
  return true;
  //  const usuarioLogado = loginService.usuarioLogado;
  //  const url = state.url;


  //if (usuarioLogado) {

  //const requiredRole = route.data['role'];

  //if (!requiredRole) {
  //return true;
  //}

  // if (usuarioLogado.role === requiredRole) {
  //return true; 
  //} else {
  //console.warn(`Acesso negado. Usuário ${usuarioLogado.role} tentou acessar ${url} (requer ${requiredRole})`);
  //if (usuarioLogado.role === 'FUNCIONARIO') {
  //router.navigate(['/painel']); 
  //} else {
  // router.navigate(['/']); 
  //}
  //return false; 
  //}
  //}
  //router.navigate(['/login'], { queryParams: { error: "Deve fazer o login para acessar " + url } });
  //return false; 
};
