import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'panel',
  imports: [CommonModule],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class Panel {
  @Input() border_gradient = "";
}
