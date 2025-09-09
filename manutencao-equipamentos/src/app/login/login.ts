import { Component } from '@angular/core';
import { BtnLogin } from '../shared/btn-login/btn-login';
import { Panel } from '../shared/panel/panel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [BtnLogin,Panel,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  
}

