// src/app/auth.interceptor.ts

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from '../app/services/loginService';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);
  const authToken = loginService.getStoredToken();

  // Ignorar o interceptor para a requisição de login
  if (req.url.includes('/login') || !authToken) {
    return next(req);
  }
  
  if (req.url.includes('/register') || !authToken) {
      return next(req);
  }

  // Clona a requisição e adiciona o cabeçalho de Autorização
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${authToken}`)
  });

  return next(authReq);
};