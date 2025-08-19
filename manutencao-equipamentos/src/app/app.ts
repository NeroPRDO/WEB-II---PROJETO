import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { botaoBasico } from './shared/Botoes/botaoBasico/botaoBasico';
import { NavComponent } from './shared/Nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, botaoBasico, NavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('manutencao-equipamentos');
}