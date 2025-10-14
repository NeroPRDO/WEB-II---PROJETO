import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Panel } from '../../../shared/panel/panel';
import { NavComponent } from '../../../shared/Nav/nav';
import { TableChamado } from '../../../shared/table-chamado/table-chamado';
import { ModalComponent } from '../../../shared/novo-modal/novo-modal';
import { EfetuarOrcamento } from '../efetuar-orcamento/efetuar-orcamento';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { PainelAcoesFuncionario } from '../../../shared/painel-acoes-funcionario/painel-acoes-funcionario';

export interface Categoria {
  codigo: string;
  nome: string;
}

@Component({
  selector: 'app-manter-Categoria',
  imports: [RouterLink, Panel, FormsModule, ReactiveFormsModule, NavComponent, TableChamado, ModalComponent, EfetuarOrcamento, PainelAcoesFuncionario],
  templateUrl: './manter-Categoria.html',
  styleUrl: './manter-Categoria.css'
})
export class ManterCategoria {
  modalAdicionarCategoriaVisible = false;
  modalRemoverCategoriaVisible = false;
  modalEditarCategoriaVisible = false;

  selectedCategoria: any = null;

  addCatForm!: FormGroup;
  updateCatForm!: FormGroup;

  ngOnInit() {
    this.addCatForm = new FormGroup({
      nome: new FormControl(''),
    })

    this.updateCatForm = new FormGroup({
      nome: new FormControl(''),
    })

  }

  data: Categoria[] = [
    {
      "codigo": "1",
      "nome": "Impressora",
    },
    {
      "codigo": "2",
      "nome": "Celular",
    },
    {
      "codigo": "3",
      "nome": "Notebook",
    }
  ]

  openEditarCategoria(row: any) {
    this.selectedCategoria = row;
    this.updateCatForm.patchValue(this.selectedCategoria);
    this.modalEditarCategoriaVisible = true;
  }

  closeEditarCategoria() {
    this.modalEditarCategoriaVisible = false;
    this.selectedCategoria = null;
  }

  openRemoverCategoria() {
    this.modalEditarCategoriaVisible = false;
    this.modalRemoverCategoriaVisible = true
  }

  closeRemoverCategoria() {
    this.modalRemoverCategoriaVisible = false;
    this.modalEditarCategoriaVisible = true;
  }

  openAdicionarCategoria() {
    this.modalAdicionarCategoriaVisible = true;
  }

  closeAdicionarCategoria() {
    this.modalAdicionarCategoriaVisible = false;
  }

  removeCategoriaByID(id: string) {
    console.log(id);
    this.data = this.data.filter(Categoria => Categoria.codigo != id);
    this.selectedCategoria = null;
    this.modalEditarCategoriaVisible = false;
    this.modalRemoverCategoriaVisible = false;
  }

  updateCategoria() {
    if (this.updateCatForm.invalid) {
      return;
    }
    let updatedData = {
      ...this.updateCatForm.value,
      codigo: this.selectedCategoria.codigo
    };
    this.removeCategoriaByID(this.selectedCategoria.codigo)
    this.data.push(updatedData);
    this.data.sort((a, b) => parseInt(a.codigo) - parseInt(b.codigo));
    this.closeEditarCategoria()
  }

  addCategoria() {
    if (this.addCatForm.invalid) {
      return;
    }

    let newID = parseInt(this.data[this.data.length - 1].codigo) + 1;
    console.log(newID);
    let newCategoria = {
      ...this.addCatForm.value,
      codigo: newID
    }

    this.data.push(newCategoria);
    this.closeAdicionarCategoria()
    this.addCatForm.reset();
  }
}
