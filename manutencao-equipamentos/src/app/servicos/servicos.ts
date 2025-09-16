import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../shared/Nav/nav';
import { BotaoServicos } from '../shared/botao-servicos/botao-servicos';

@Component({
  selector: 'app-servicos',
  imports: [RouterLink,NavComponent,BotaoServicos],
  templateUrl: './servicos.html',
  styleUrl: './servicos.css'
})
export class Servicos {

}
