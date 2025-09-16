import { Component } from '@angular/core';
import { NavComponent } from '../shared/Nav/nav';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-visualizar-servico',
  standalone: true,
  imports: [NavComponent,RouterModule],
  templateUrl: './visualizar-servico.html',
  styleUrl: './visualizar-servico.css'
})
export class VisualizarServico {

}
