import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavComponent } from '../../../shared/Nav/nav';
import { TableChamado } from '../../../shared/table-chamado/table-chamado';
import { ModalComponent } from '../../../shared/novo-modal/novo-modal';
import { PainelAcoesFuncionario } from '../../../shared/painel-acoes-funcionario/painel-acoes-funcionario';
import { Panel } from '../../../shared/panel/panel';

import { FuncionarioResponse, FuncionarioService, FuncionarioRequest } from '../../../services/funcionarioService';

@Component({
  selector: 'app-manter-funcionario',
  standalone: true,
  imports: [
    RouterLink,
    Panel,
    FormsModule,
    ReactiveFormsModule,
    NavComponent,
    TableChamado,
    ModalComponent,
    PainelAcoesFuncionario
  ],
  templateUrl: './manter-funcionario.html',
  styleUrl: './manter-funcionario.css'
})
export class ManterFuncionario implements OnInit {

  modalAdicionarFuncionarioVisible = false;
  modalRemoverFuncionarioVisible = false;
  modalEditarFuncionarioVisible = false;

  private funcionarioService = inject(FuncionarioService);

  data: FuncionarioResponse[] = [];
  selectedFuncionario: FuncionarioResponse | null = null;

  addFuncFrom!: FormGroup;
  updateFuncForm!: FormGroup;

  ngOnInit() {
    this.initForms();
    this.loadFuncionarios();
  }

  private initForms() {
    this.addFuncFrom = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', Validators.required),
    });

    this.updateFuncForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl(''),
      dataNascimento: new FormControl('', Validators.required),
    });
  }

  
  private converterDataParaISO(dataBrasileira: string): string {
    if (!dataBrasileira) return '';

    if (dataBrasileira.includes('-')) return dataBrasileira;

    const partes = dataBrasileira.split('/');

    if (partes.length === 3) {
      return `${partes[2]}-${partes[1]}-${partes[0]}`;
    }

    return dataBrasileira;
  }

  loadFuncionarios(): void {
    this.funcionarioService.getAll().subscribe({
      next: (response: any[]) => {
        this.data = response as FuncionarioResponse[];
      },
      error: (err) => console.error('Erro ao carregar funcionários', err)
    });
  }

  openAdicionarFuncionario() {
    this.modalAdicionarFuncionarioVisible = true;
    this.addFuncFrom.reset();
  }

  closeAdicionarFuncionario() {
    this.modalAdicionarFuncionarioVisible = false;
    this.addFuncFrom.reset();
  }

  openEditarFuncionario(row: FuncionarioResponse) {
    this.selectedFuncionario = row;

    this.updateFuncForm.patchValue({
      nome: row.nome,
      email: row.email,
      dataNascimento: row.dataNascimento,
      senha: ''
    });

    this.modalEditarFuncionarioVisible = true;
  }

  closeEditarFuncionario() {
    this.modalEditarFuncionarioVisible = false;
    this.selectedFuncionario = null;
    this.updateFuncForm.reset();
  }

  openRemoverFuncionario() {
    this.modalEditarFuncionarioVisible = false;
    this.modalRemoverFuncionarioVisible = true;
  }

  closeRemoverFuncionario() {
    this.modalRemoverFuncionarioVisible = false;
    if (this.selectedFuncionario) {
      this.modalEditarFuncionarioVisible = true;
    }
  }

  addFuncionario() {
    if (this.addFuncFrom.invalid) return;

    const dataFormatada = this.converterDataParaISO(this.addFuncFrom.value.dataNascimento);

    const payload: FuncionarioRequest = {
      nome: this.addFuncFrom.value.nome,
      email: this.addFuncFrom.value.email,
      dataNascimento: dataFormatada,
      senha: this.addFuncFrom.value.senha
    };

    this.funcionarioService.create(payload).subscribe({
      next: (mensagemSucesso: string) => {
        console.log('Resposta do back:', mensagemSucesso);

        this.loadFuncionarios();

        this.closeAdicionarFuncionario();
        alert(mensagemSucesso);
      },
      error: (err) => {
        console.error('Erro:', err);
        alert('Erro ao salvar funcionário.');
      }
    });
  }

  updateFuncionario() {
    if (this.updateFuncForm.invalid || !this.selectedFuncionario) return;

    const id = this.selectedFuncionario.id;

    const dataFormatada = this.converterDataParaISO(this.updateFuncForm.value.dataNascimento);

    const payload: FuncionarioRequest = {
      nome: this.updateFuncForm.value.nome,
      email: this.updateFuncForm.value.email,
      dataNascimento: dataFormatada,
      senha: this.updateFuncForm.value.senha
    };

    this.funcionarioService.update(id, payload).subscribe({
      next: (response) => {
        alert(response)
        this.loadFuncionarios()
        this.closeEditarFuncionario();
      },
      error: (err) => {
        console.error('Erro ao atualizar funcionário', err);
        alert('Erro ao atualizar: Verifique se a data está correta.');
      }
    });
  }

  removeFuncionarioByID(id: number) {
    this.funcionarioService.remove(id).subscribe({
      next: (mensagemSucesso: string) => {
        console.log(mensagemSucesso); 

        this.data = this.data.filter(f => f.id !== id);

        this.closeRemoverFuncionario();
        this.closeEditarFuncionario(); 

        alert(mensagemSucesso);
      },
      error: (err) => {
        console.error('Erro ao remover funcionário', err);
        alert('Erro ao remover funcionário.');
      }
    });
  }
}