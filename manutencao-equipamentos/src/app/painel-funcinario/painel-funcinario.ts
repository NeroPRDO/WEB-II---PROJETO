import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Panel } from '../shared/panel/panel';
import { NavComponent } from '../shared/Nav/nav';
import { TableChamado, TableColumn } from '../shared/table-chamado/table-chamado';
import { BtnGradient } from '../shared/btn-gradient/btn-gradient';
import { ModalComponent } from '../shared/novo-modal/novo-modal';
import { EfetuarOrcamento } from '../efetuar-orcamento/efetuar-orcamento';
import { PainelAcoesFuncionario } from '../shared/painel-acoes-funcionario/painel-acoes-funcionario';

@Component({
  selector: 'app-painel-funcinario',
  imports: [RouterLink, Panel, NavComponent, TableChamado, PainelAcoesFuncionario, BtnGradient, ModalComponent, EfetuarOrcamento],
  templateUrl: './painel-funcinario.html',
  styleUrl: './painel-funcinario.css'
})
export class PainelFuncinario {
  orcamentoModalVisible = false;

  openOrcamentoModal(row: any) {
    this.orcamentoModalVisible = true;
    this.selectedChamado = row.id;
  }

  closeOrcamentoModal() {
    this.orcamentoModalVisible = false;
  }

  selectedChamado: any = null

  data = [
    {
      "id": "1",
      "codigo": "123",
      "cliente": "maria fernanda",
      "descricao": "fdisjfdjs",
      "data_chamado": "05/07/2025"
    },
    {
      "id": "2",
      "codigo": "456",
      "cliente": "thiago",
      "descricao": "gfdgd",
      "data_chamado": "05/07/2025"
    },
    {
      "id": "3",
      "codigo": "789",
      "cliente": "pedro",
      "descricao": "bvcbAScv",
      "data_chamado": "05/07/2025"
    },
    {
      "id": "4",
      "codigo": "456",
      "cliente": "dyego",
      "descricao": "fdsferw",
      "data_chamado": "05/07/2025"
    },
    {
      "id": '5',
      "codigo": "789",
      "cliente": "matheus",
      "descricao": "hgfhfghfg",
      "data_chamado": "05/07/2025"
    },
    {
      "id": "6",
      "codigo": "123",
      "cliente": "gabriela",
      "descricao": "gfjigfji",
      "data_chamado": "05/07/2007"
    }

  ]
}
