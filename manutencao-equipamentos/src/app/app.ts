import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { botaoBasico } from './shared/Botoes/botaoBasico/botaoBasico';
import { NavComponent } from './shared/Nav/nav';
import { Panel } from './shared/panel/panel';
import { TextBox } from './shared/text-box/text-box';
import { FooterComponent } from "./shared/footer-component/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, botaoBasico, NavComponent, Panel, TextBox, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('manutencao-equipamentos');
}