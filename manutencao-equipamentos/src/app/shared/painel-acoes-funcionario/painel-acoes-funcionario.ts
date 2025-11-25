import { Component } from '@angular/core';
import { Panel } from '../panel/panel';
import { BtnGradient } from '../btn-gradient/btn-gradient';
import { Router } from '@angular/router'; // Mudamos para Router

interface ActionButton {
  routerLink: string;
  buttonMessage: string;
  exact: boolean; // Novo campo para controlar se a rota deve ser exata
}

@Component({
  selector: 'painel-acoes-funcionario',
  imports: [Panel, BtnGradient],
  templateUrl: './painel-acoes-funcionario.html',
  styleUrl: './painel-acoes-funcionario.css'
})
export class PainelAcoesFuncionario {

  constructor(private router: Router) { }

  buttons: ActionButton[] = [
    {
      routerLink: "/func",
      buttonMessage: "Painel",
      exact: true
    },
    {
      routerLink: "/func/funcionarios",
      buttonMessage: "Manter Funcionarios",
      exact: false
    },
    {
      routerLink: "/func/categorias",
      buttonMessage: "Manter Categorias",
      exact: false
    },
    {
      routerLink: "/func/relatorios",
      buttonMessage: "Gerar Relatorio",
      exact: true
    }
  ]

  verificarAtivo(item: ActionButton): boolean {
    if (!item.routerLink) return false;

    return this.router.isActive(item.routerLink, {
      paths: item.exact ? 'exact' : 'subset',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }
}