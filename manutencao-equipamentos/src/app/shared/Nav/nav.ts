import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class NavComponent {
  private router = inject(Router);

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_data');
  }

  logout(): void {
    localStorage.removeItem('auth_data');
    this.router.navigate(['/login']);
  }
}
