import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Mantenha este import
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Importe para usar *ngIf
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  // Adicione CommonModule e mantenha os outros
  imports: [RouterLink, FormsModule, HttpClientModule, NgxMaskDirective, CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  // Objeto para agrupar todos os dados do formulário
  cadastroData = {
    cpf: '',
    nome: '',
    email: '',
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
    numero: '',
    telefone: ''
  };

  constructor(private http: HttpClient) { }

  buscarCep() {
    // Usamos o valor do objeto cadastroData
    const cep = this.cadastroData.cep.replace(/\D/g, '');

    if (cep.length === 8) {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
        .subscribe({
          next: (data: any) => {
            if (!data.erro) {
              // Atualiza as propriedades do nosso objeto
              this.cadastroData.logradouro = data.logradouro;
              this.cadastroData.bairro = data.bairro;
              this.cadastroData.localidade = data.localidade;
              this.cadastroData.uf = data.uf;
            } else {
              this.limparEndereco();
              alert('CEP não encontrado!');
            }
          },
          error: (error) => {
            this.limparEndereco();
            console.error('Erro ao buscar CEP:', error);
            alert('Erro ao buscar CEP. Tente novamente.');
          }
        });
    } else if (cep.length === 0) {
      this.limparEndereco();
    }
  }

  private limparEndereco() {
    this.cadastroData.logradouro = '';
    this.cadastroData.bairro = '';
    this.cadastroData.localidade = '';
    this.cadastroData.uf = '';
  }

  onSubmit() {
    console.log('Dados do formulário enviados:', this.cadastroData);
    // Aqui você enviaria os dados para sua API de backend
  }
}