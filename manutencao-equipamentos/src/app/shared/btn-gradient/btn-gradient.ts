import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-gradient',
  imports: [],
  templateUrl: './btn-gradient.html',
  styleUrl: './btn-gradient.css'
})
export class BtnGradient {
  @Input() message = "";
}
