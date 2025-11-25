import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'btn-gradient',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './btn-gradient.html',
  styleUrl: './btn-gradient.css'
})
export class BtnGradient {
  @Input() routerLink: string | null = null;
  @Input() message = "";


  @Input() active: boolean = false;
}