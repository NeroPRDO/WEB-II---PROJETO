import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Panel } from '../shared/panel/panel';
import { NavComponent } from '../shared/Nav/nav';
import { TableChamado } from '../shared/table-chamado/table-chamado';
import { ModalComponent } from '../shared/novo-modal/novo-modal';
import { EfetuarOrcamento } from '../efetuar-orcamento/efetuar-orcamento';
import { PainelAcoesFuncionario } from '../shared/painel-acoes-funcionario/painel-acoes-funcionario';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export interface Funcionario {
  codigo: string;
  email: string;
  nome: string;
  data_nasc: string;
  senha: string;
}

@Component({
  selector: 'app-manter-funcionario',
  imports: [RouterLink, Panel, FormsModule, ReactiveFormsModule, NavComponent, TableChamado, ModalComponent, EfetuarOrcamento, PainelAcoesFuncionario],
  templateUrl: './manter-funcionario.html',
  styleUrl: './manter-funcionario.css'
})
export class ManterFuncionario {
  modalAdicionarFuncionarioVisible = false;
  modalRemoverFuncionarioVisible = false;
  modalEditarFuncionarioVisible = false;

  selectedFuncionario: any = null;

  addFuncFrom!: FormGroup;
  updateFuncForm!: FormGroup;

  ngOnInit() {
    this.addFuncFrom = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      data_nasc: new FormControl(''),
      senha: new FormControl('')
    })

    this.updateFuncForm = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      data_nasc: new FormControl(''),
      senha: new FormControl('')
    })

  }

  data: Funcionario[] = [
    {
      "codigo": "1",
      "nome": "Maria Fernanda",
      "email": "mfzc@gmail.com",
      "data_nasc": "02/07/2005",
      "senha": "123456"
    },
    {
      "codigo": "2",
      "nome": "Lucas b",
      "email": "lucas@gmail.com",
      "data_nasc": "07/05/2007",
      "senha": "437854"
    },
    {
      "codigo": "3",
      "nome": "Nene",
      "email": "Nene@gmail.com",
      "data_nasc": "07/05/2023",
      "senha": "437854"
    }
  ]

  openEditarFuncionario(row: any) {
    this.selectedFuncionario = row;
    this.updateFuncForm.patchValue(this.selectedFuncionario);
    this.modalEditarFuncionarioVisible = true;
  }

  closeEditarFuncionario() {
    this.modalEditarFuncionarioVisible = false;
    this.selectedFuncionario = null;
  }

  openRemoverFuncionario() {
    this.modalEditarFuncionarioVisible = false;
    this.modalRemoverFuncionarioVisible = true
  }

  closeRemoverFuncionario() {
    this.modalRemoverFuncionarioVisible = false;
    this.modalEditarFuncionarioVisible = true;
  }

  openAdicionarFuncionario() {
    this.modalAdicionarFuncionarioVisible = true;
  }

  closeAdicionarFuncionario() {
    this.modalAdicionarFuncionarioVisible = false;
  }

  removeFuncionarioByID(id: string) {
    console.log(id);
    this.data = this.data.filter(funcionario => funcionario.codigo != id);
    this.selectedFuncionario = null;
    this.modalEditarFuncionarioVisible = false;
    this.modalRemoverFuncionarioVisible = false;
  }

  updateFuncionario() {
    if (this.updateFuncForm.invalid) {
      return;
    }
    let updatedData = {
      ...this.updateFuncForm.value,
      codigo: this.selectedFuncionario.codigo
    };
    this.removeFuncionarioByID(this.selectedFuncionario.codigo)
    this.data.push(updatedData);
    this.data.sort((a, b) => parseInt(a.codigo) - parseInt(b.codigo));
    this.closeEditarFuncionario()
  }

  addFuncionario() {
    if (this.updateFuncForm.invalid) {
      console.log("????")
      return;
    }

    let newID = this.data[this.data.length - 1].codigo + 1;
    console.log(newID);
    let newFuncionario = {
      ...this.addFuncFrom.value,
      codigo: newID
    }

    this.data.push(newFuncionario);
    this.closeAdicionarFuncionario()
    this.addFuncFrom.reset();
  }
}
