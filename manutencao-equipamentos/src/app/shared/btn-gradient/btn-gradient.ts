import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'btn-gradient',
  imports: [RouterLink],
  templateUrl: './btn-gradient.html',
  styleUrl: './btn-gradient.css'
})
export class BtnGradient {
  @Input() routerLink: string | null = null;
  @Input() message = "";
}
