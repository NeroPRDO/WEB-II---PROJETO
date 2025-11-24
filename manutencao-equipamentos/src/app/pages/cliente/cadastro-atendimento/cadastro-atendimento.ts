import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../../../shared/Nav/nav';
import { CategoriaResponse, CategoriaService } from '../../../services/categoriaService';
import { HttpErrorResponse } from '@angular/common/http';
import { SolicitacaoService } from '../../../services/solicitacao';
import { Router } from '@angular/router';


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
  solicitacaoService = inject(SolicitacaoService)
  private router = inject(Router);
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
    const formValues = this.solicitacaoForm.value;
    
    // 1. Converter o valor do select para número (ID)
    const idCategoriaSelecionada = Number(formValues.categoriaEquipamento);

    // 2. Encontrar o objeto categoria na lista original para pegar o nome
    const categoriaEncontrada = this.categorias.find(c => c.id === idCategoriaSelecionada);
    const nomeCategoria = categoriaEncontrada ? categoriaEncontrada.nomeCategoria : 'Geral';

    // ... lógica de pegar usuário ...
    const dadosUsuario = localStorage.getItem('auth_data');
    if (!dadosUsuario) return;
    const usuarioLogado = JSON.parse(dadosUsuario);

    // 3. Montar o objeto final
    const novaSolicitacao = {
      // Usa o nome que encontramos acima
      descricao: formValues.descricaoDefeito,            
      descricaoEquipamentos: formValues.descricaoEquipamento, 
      categoriaId: Number(formValues.categoriaEquipamento),   
      usuarioId: usuarioLogado.id,                       
      estadoChamado: 'ABERTA'                           
    };

    // 4. Enviar
    this.solicitacaoService.save(novaSolicitacao as any).subscribe({
       next: (res) => {
         this.solicitacaoForm.reset();
         this.router.navigate(['/dashboard']);
         this.solicitacaoForm.get('categoriaEquipamento')?.setValue('');
       },
       error: (err) => console.error(err)
    });

  } else {
    this.solicitacaoForm.markAllAsTouched();
  }
}
}