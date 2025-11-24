import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideNgxMask } from 'ngx-mask';
import { authInterceptor } from './authInterceptor';
import { jwtDecode } from 'jwt-decode';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideNgxMask(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};