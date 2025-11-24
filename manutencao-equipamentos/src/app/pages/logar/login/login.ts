import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/loginService'


@Component({
  selector: 'app-login',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
    login = {
        email: '',
        senha: ''
    };

    constructor(private loginService: LoginService) { }


    logar(): void {
        if (!this.login.email || !this.login.senha) {
            console.error('Campos vazios!');
            return;
        }

        // Chame o serviço de autenticação
        this.loginService.logar(this.login).subscribe({
          next: (response) => {
            console.log('Login bem-sucedido. Role:', this.loginService.usuarioLogado()?.role);
            // O redirecionamento já é feito dentro do serviço (tap)
          },
          error: (error) => {
            console.error('Erro no login:', error);
            // Implemente a exibição de mensagem de erro para o usuário
            alert('Falha no login. Verifique suas credenciais.');
          }
        });
    }
}

