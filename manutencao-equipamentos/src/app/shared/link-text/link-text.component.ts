import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-text',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './link-text.component.html',
  styleUrls: ['./link-text.component.css']
})
export class LinkTextComponent {
  @Input() text: string = '';
  @Input() href: string = '#';
  @Input() routerLink: string = '';
  @Input() target: string = '_self';
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() underline: boolean = true;
}