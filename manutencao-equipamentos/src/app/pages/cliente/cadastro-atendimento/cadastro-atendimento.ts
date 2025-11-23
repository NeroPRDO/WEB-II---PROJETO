import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../../../shared/Nav/nav';
import { CategoriaResponse, CategoriaService } from '../../../services/categoriaService';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-atendimento',
  standalone: true,
  imports: [NavComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-atendimento.html',
  styleUrls: ['./cadastro-atendimento.css']
})
export class CadastroAtendimento {

  // Declara a propriedade para o formulário reativo.
  solicitacaoForm!: FormGroup;
  categoriaService = inject(CategoriaService)
  // Dados de teste para as categorias de equipamentos
  categorias: CategoriaResponse[] = [];

  // O construtor injeta o FormBuilder para criar o formulário
  constructor(private fb: FormBuilder) {
    this.getAll();
    this.solicitacaoForm = this.fb.group({
      descricaoEquipamento: ['', [Validators.required, Validators.maxLength(30)]],
      categoriaEquipamento: ['', Validators.required],
      descricaoDefeito: ['', Validators.required]
    });
  }
  getAll(){
    this.categoriaService.getAll().subscribe({
      next: categorias =>{
        this.categorias = categorias;
      },
      error: (err: HttpErrorResponse) => {
        
        console.error('Erro detalhado:', err);
        
        if (err.status === 401) {
          alert('Sessão expirada ou não autenticada. Por favor, faça login novamente.');
          
        } 
        else if (err.status === 403) {
          alert('Você não tem permissão para acessar este recurso.');
        } 
        else if (err.status === 0) {
          alert('Não foi possível conectar ao servidor. Verifique se o Backend está rodando.');
        } 
        else {
          
          const mensagemBackend = err.error?.message || err.message;
          alert(`Ocorreu um erro: ${mensagemBackend}`);
        }
      },
    })

    

  }

  // Função para "enviar" os dados 
  enviarSolicitacao(): void {
    if (this.solicitacaoForm.valid) {
      console.log('Dados do formulário para prototipação:', this.solicitacaoForm.value);
      alert('Sua solicitação foi registrada com sucesso!');
      
      this.solicitacaoForm.reset();
      // Define o valor do campo 'categoriaEquipamento' como vazio
      this.solicitacaoForm.get('categoriaEquipamento')?.setValue('');
      
    } else {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.solicitacaoForm.markAllAsTouched();
    }
  }
}