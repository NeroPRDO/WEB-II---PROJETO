import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../shared/Nav/nav';
import { CadastroAtendimento } from '../cadastro-atendimento/cadastro-atendimento';

@Component({
  selector: 'app-dashboard',
  imports: [NavComponent, CadastroAtendimento, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
