import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  cep = signal('');
  logradouro = signal('');
  bairro = signal('');
  localidade = signal('');
  uf = signal('');

  constructor(private http: HttpClient) { }

  buscarCep(cepInput: string) {
    const cep = cepInput.replace(/\D/g, '');

    if (cep.length === 8) {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
        .subscribe({
          next: (data: any) => {
            if (!data.erro) {
              this.logradouro.set(data.logradouro);
              this.bairro.set(data.bairro);
              this.localidade.set(data.localidade);
              this.uf.set(data.uf);
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
    this.logradouro.set('');
    this.bairro.set('');
    this.localidade.set('');
    this.uf.set('');
  }

  onSubmit() {
    console.log('Dados do formulário:', {
      cep: this.cep(),
      logradouro: this.logradouro(),
      bairro: this.bairro(),
      cidade: this.localidade(),
      uf: this.uf()
    });
  }
}