import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Panel } from '../shared/panel/panel';
import { NavComponent } from '../shared/Nav/nav';
import { TableChamado } from '../shared/table-chamado/table-chamado';
import { BtnGradient } from '../shared/btn-gradient/btn-gradient';

@Component({
  selector: 'app-painel-funcinario',
  imports: [RouterLink, Panel, NavComponent, TableChamado, BtnGradient],
  templateUrl: './painel-funcinario.html',
  styleUrl: './painel-funcinario.css'
})
export class PainelFuncinario {

}
