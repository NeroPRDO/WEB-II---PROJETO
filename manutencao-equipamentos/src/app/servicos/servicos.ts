import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../shared/Nav/nav';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicos',
  standalone: true, // Adicionado para componentes sem um NgModule específico
  imports: [
    CommonModule, // Necessário para diretivas como [class.hidden]
    FormsModule,
    NavComponent,RouterLink],
  templateUrl: './servicos.html',
  styleUrl: './servicos.css'
})

export class Servicos {
  
}