import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { botaoBasico } from './shared/Botoes/botaoBasico/botaoBasico';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, botaoBasico],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('manutencao-equipamentos');
}