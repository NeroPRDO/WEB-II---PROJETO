import { Component } from '@angular/core';
import { BtnLogin } from '../shared/btn-login/btn-login';
import { Panel } from '../shared/panel/panel';
@Component({
  selector: 'app-login',
  imports: [BtnLogin,Panel],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}

