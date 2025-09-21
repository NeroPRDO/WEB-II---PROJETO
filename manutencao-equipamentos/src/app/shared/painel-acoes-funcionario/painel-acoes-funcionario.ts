import { Component } from '@angular/core';
import { Panel } from '../panel/panel';
import { BtnGradient } from '../btn-gradient/btn-gradient';
import { ActivatedRoute } from '@angular/router';

interface ActionButton {
  routerLink: string;
  buttonMessage: string;
}

@Component({
  selector: 'painel-acoes-funcionario',
  imports: [Panel, BtnGradient],
  templateUrl: './painel-acoes-funcionario.html',
  styleUrl: './painel-acoes-funcionario.css'
})
export class PainelAcoesFuncionario {

  currentRoute: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentRoute = this.route.snapshot.url.join('/');
    console.log(this.currentRoute);
  }

  buttons: ActionButton[] = [
    {
      routerLink: "/func",
      buttonMessage: "Painel"
    },
    {
      routerLink: "/func/funcionarios",
      buttonMessage: "Manter Funcionarios"
    },
    {
      routerLink: "/func/categorias",
      buttonMessage: "Manter Categorias"
    },
    {
      routerLink: "",
      buttonMessage: "Gerar Relatorio"
    }
  ]

}
