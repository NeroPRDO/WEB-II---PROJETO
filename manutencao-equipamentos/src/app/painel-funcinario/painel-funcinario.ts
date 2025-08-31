import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Panel } from '../shared/panel/panel';
import { NavComponent } from '../shared/Nav/nav';


@Component({
  selector: 'app-painel-funcinario',
  imports: [RouterLink, Panel, NavComponent],
  templateUrl: './painel-funcinario.html',
  styleUrl: './painel-funcinario.css'
})
export class PainelFuncinario {

}
