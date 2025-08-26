import { Component } from '@angular/core';
import { NavComponent } from '../shared/Nav/nav';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-atendimento',
  standalone: true,
  imports: [NavComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-atendimento.html',
  styleUrl: './cadastro-atendimento.css'
})

export class CadastroAtendimento {

  Solicitacao: FormGroup;
  categorias: string[] = ['Notebook', 'Desktop', 'Impressora', 'Mouse', 'Teclado']; // Dados de teste

  constructor(private construtorFormulario: FormBuilder) {
    // Configura o formulário reativo com validações
    this.Solicitacao = this.construtorFormulario.group({
      descricaoEquipamento: ['', [Validators.required, Validators.maxLength(30)]],
      categoriaEquipamento: ['', Validators.required],
      descricaoDefeito: ['', Validators.required]
    });
  }

  enviarSolicitacao(): void {
    if (this.Solicitacao.valid) {
      console.log('Dados do formulário para prototipação:', this.Solicitacao.value);
      
      // Simulação de sucesso
      alert('Sua solicitação foi registrada com sucesso!');
      
      // Limpa o formulário para uma nova solicitação
      this.Solicitacao.reset();
      
      // Opcional: define um valor padrão para a categoria após o reset
      this.Solicitacao.get('categoriaEquipamento')?.setValue('');
      
    } else {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
  }

}
