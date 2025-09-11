import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Panel } from '../shared/panel/panel';
import { NavComponent } from '../shared/Nav/nav';
import { TableChamado, TableColumn } from '../shared/table-chamado/table-chamado';
import { BtnGradient } from '../shared/btn-gradient/btn-gradient';


@Component({
  selector: 'app-painel-funcinario',
  imports: [RouterLink, Panel, NavComponent, TableChamado, BtnGradient],
  templateUrl: './painel-funcinario.html',
  styleUrl: './painel-funcinario.css'
})
export class PainelFuncinario {
  data = [
    {
      "id": 1, 
      "codigo": "123", 
      "cliente": "maria fernanda", 
      "descricao": "fdisjfdjs", 
      "data_chamado": "05/07/2025"
    },
    {
      "id": 2, 
      "codigo": "456", 
      "cliente": "thiago", 
      "descricao": "gfdgd", 
      "data_chamado": "05/07/2025"
    },
    {
      "id": 3, 
      "codigo": "789", 
      "cliente": "pedro", 
      "descricao": "bvcbAScv", 
      "data_chamado": "05/07/2025"
    },
    {
      "id": 4, 
      "codigo": "456", 
      "cliente": "dyego", 
      "descricao": "fdsferw", 
      "data_chamado": "05/07/2025"
    },
    {
      "id": 3, 
      "codigo": "789", 
      "cliente": "matheus", 
      "descricao": "hgfhfghfg", 
      "data_chamado": "05/07/2025"
    },
    {
      "id": 3, 
      "codigo": "123", 
      "cliente": "gabriela", 
      "descricao": "gfjigfji", 
      "data_chamado": "05/07/2007"
    }

  ]
}
