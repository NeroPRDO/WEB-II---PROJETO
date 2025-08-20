import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkTextComponent } from '../link-text/link-text.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LinkTextComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = [
    { text: 'Sobre', href: '/sobre' },
    { text: 'Contato', href: '/contato' },
    { text: 'Política de Privacidade', href: '/privacidade' },
    { text: 'Termos de Uso', href: '/termos' }
  ];

  socialLinks = [
    { text: 'Facebook', href: 'https://facebook.com' },
    { text: 'Twitter', href: 'https://twitter.com' },
    { text: 'LinkedIn', href: 'https://linkedin.com' }
  ];
}