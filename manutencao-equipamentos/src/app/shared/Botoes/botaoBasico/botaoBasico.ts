import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "botao-basico",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./botaoBasico.html",
    styleUrl: "./botaoBasico.css"
})
export class botaoBasico {
    @Input() mensagem = '';
    @Input() outlined = false;
}