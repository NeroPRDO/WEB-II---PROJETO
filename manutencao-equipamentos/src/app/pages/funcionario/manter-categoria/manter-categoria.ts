import { Component, OnInit } from '@angular/core';
import { Panel } from '../../../shared/panel/panel';
import { NavComponent } from '../../../shared/Nav/nav';
import { TableChamado } from '../../../shared/table-chamado/table-chamado';
import { ModalComponent } from '../../../shared/novo-modal/novo-modal';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { PainelAcoesFuncionario } from '../../../shared/painel-acoes-funcionario/painel-acoes-funcionario';

import { CategoriaService, CategoriaResponse, CategoriaRequest } from '../../../services/categoriaService';

@Component({
  selector: 'app-manter-Categoria',
  standalone: true,
  imports: [
    Panel, FormsModule, ReactiveFormsModule, NavComponent,
    TableChamado, ModalComponent, PainelAcoesFuncionario
  ],
  templateUrl: './manter-Categoria.html',
  styleUrl: './manter-Categoria.css'
})
export class ManterCategoria implements OnInit {
  modalAdicionarCategoriaVisible: boolean = false;
  modalRemoverCategoriaVisible: boolean = false;
  modalEditarCategoriaVisible: boolean = false;

  data: CategoriaResponse[] = [];
  selectedCategoria: CategoriaResponse | null = null;

  addCatForm!: FormGroup;
  updateCatForm!: FormGroup;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.addCatForm = new FormGroup({
      nomeCategoria: new FormControl('', Validators.required),
      ativo: new FormControl(true)
    });

    this.updateCatForm = new FormGroup({
      nomeCategoria: new FormControl('', Validators.required),
      ativo: new FormControl(true)
    });

    this.loadCategorias();
  }

  loadCategorias(): void {
    this.categoriaService.getAll().subscribe({
      next: (categorias: CategoriaResponse[]) => {
        this.data = categorias;
      },
      error: (err: any) => console.error('Erro ao carregar categorias', err)
    });
  }

  openEditarCategoria(row: CategoriaResponse): void {
    this.selectedCategoria = row;
    this.updateCatForm.patchValue(this.selectedCategoria);
    this.modalEditarCategoriaVisible = true;
  }

  closeEditarCategoria(): void {
    this.modalEditarCategoriaVisible = false;
    this.selectedCategoria = null;
  }

  openRemoverCategoria() {
    this.modalEditarCategoriaVisible = false;
    this.modalRemoverCategoriaVisible = true
  }

  closeRemoverCategoria(): void {
    this.modalRemoverCategoriaVisible = false;
    this.selectedCategoria = null;
  }

  openAdicionarCategoria(): void {
    this.addCatForm.reset({ ativo: true });
    this.modalAdicionarCategoriaVisible = true;
  }

  closeAdicionarCategoria(): void {
    this.modalAdicionarCategoriaVisible = false;
  }

  removeCategoriaByID(id: number): void {
    this.categoriaService.remove(id).subscribe({
      next: (): void => {
        this.data = this.data.filter(c => c.id !== id);
        this.selectedCategoria = null;
        this.closeRemoverCategoria();
      },
      error: (err: any) => console.error('Erro ao remover categoria', err)
    });
  }

  updateCategoria(): void {
    if (this.updateCatForm.invalid || !this.selectedCategoria) {
      return;
    }

    const requestData: CategoriaRequest = this.updateCatForm.value as CategoriaRequest;
    const id: number = this.selectedCategoria.id;

    this.categoriaService.update(id, requestData).subscribe({
      next: (updatedCat: CategoriaResponse): void => {
        this.data = this.data.map(c => c.id === id ? updatedCat : c);
        this.closeEditarCategoria();
      },
      error: (err: any) => console.error('Erro ao atualizar categoria', err)
    });
  }

  addCategoria(): void {
    if (this.addCatForm.invalid) {
      return;
    }

    const requestData: CategoriaRequest = this.addCatForm.value as CategoriaRequest;

    this.categoriaService.create(requestData).subscribe({
      next: (newCat: CategoriaResponse): void => {
        this.data.push(newCat);
        this.closeAdicionarCategoria();
        this.addCatForm.reset({ ativo: true });
      },
      error: (err: any) => console.error('Erro ao adicionar categoria', err)
    });
  }
}