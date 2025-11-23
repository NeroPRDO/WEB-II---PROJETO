import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { NgxMaskDirective } from 'ngx-mask';
import { ClienteService } from '../../../services/clienteService';
import { CadastroData } from '../../../models/cadastroModel'; 


@Component({
  selector: 'app-cadastro',
  standalone: true,
  // Removido HttpClientModule, pois o HttpClient é fornecido via app.config.ts
  imports: [RouterLink, FormsModule, NgxMaskDirective, CommonModule], 
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
    // Injeção de dependências
    private clienteService = inject(ClienteService);
    private router = inject(Router);
    private http = inject(HttpClient); // Injeta HttpClient para a busca de CEP

    // Objeto para agrupar todos os dados do formulário
    cadastroData: CadastroData = {
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        localidade: '',
        uf: ''
    };

    /**
     * Executa a submissão do formulário: validação e chamada à API de Cadastro.
     */
    cadastrarUsuario(): void {
        // Validação básica
        if (!this.cadastroData.nome || !this.cadastroData.email || !this.cadastroData.cpf || !this.cadastroData.telefone) {
            alert('Preencha pelo menos os campos obrigatórios!');
            return;
        }

        console.log("payload cadastro => ", this.cadastroData)

        // O objeto cadastroData já implementa CadastroRequest e pode ser enviado
        this.clienteService.cadastrar(this.cadastroData).subscribe({
            next: (response) => {
                console.log('Cadastro realizado com sucesso:', response);
                alert('Cadastro efetuado com sucesso! Sua senha provisória foi enviada por e-mail.');
                this.router.navigate(['/login']); 
            },
            error: (error: HttpErrorResponse) => {
                console.error('Erro no cadastro:', error);
                
                let errorMessage = 'Falha ao cadastrar. Tente novamente.';
                
                // Trata erro de email já cadastrado (exemplo baseado no status 400 do Spring)
                if (error.status === 400 && error.error) {
                     // Assume que a mensagem de erro está no corpo da resposta (error.error)
                     errorMessage = error.error; 
                }
                
                alert(errorMessage);
            }
        });
    }

    /**
     * Busca o endereço automaticamente usando a API ViaCEP quando o campo CEP é preenchido.
     */
    buscarCep(): void {
        // Remove caracteres não numéricos
        const cep = this.cadastroData.cep.replace(/\D/g, '');

        if (cep.length === 8) {
            // Chamada à API ViaCEP (não requer interceptor pois é uma API externa)
            this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
                .subscribe({
                    next: (data: any) => {
                        if (!data.erro) {
                            // Mapeia os dados do ViaCEP para o objeto do formulário
                            this.cadastroData.logradouro = data.logradouro;
                            this.cadastroData.bairro = data.bairro;
                            this.cadastroData.cidade = data.localidade;
                            this.cadastroData.estado = data.uf;
                            // Foca no campo de número após preencher o restante
                            const numeroInput = document.getElementById('inputNumero') as HTMLInputElement;
                            if (numeroInput) numeroInput.focus();
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


    private limparEndereco(): void {
        this.cadastroData.logradouro = '';
        this.cadastroData.bairro = '';
        this.cadastroData.cidade = '';
        this.cadastroData.estado = '';
    }
}