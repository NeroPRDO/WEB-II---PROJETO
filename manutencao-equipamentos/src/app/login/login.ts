import { Component } from '@angular/core';
import { BtnLogin } from '../shared/btn-login/btn-login';
import { Panel } from '../shared/panel/panel';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [BtnLogin,Panel,RouterLink,CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
    login = {
        email: '',
        senha: ''
    };

    constructor() { }

    logar(): void {
        if (!this.login.email || !this.login.senha) {
            console.error('Campos vazios!');
            return;
        }
        console.log('Tentando logar com:', this.login);
        // Aqui você chamaria seu serviço de autenticação
    }
}

