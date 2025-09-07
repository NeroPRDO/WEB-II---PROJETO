import { Component } from '@angular/core';


interface Chamado {
  id: number;
  codigo: string;
  estado: 'ORÇADA' | 'APROVADA' | 'REJEITADA' | 'ARRUMADA' | 'PAGA' | 'FINALIZADA' | 'ABERTA';
  cliente?: string;
  descricao?: string;
  data?: string;
}

@Component({
  selector: 'app-table-chamado',
  imports: [],
  templateUrl: './table-chamado.html',
  styleUrl: './table-chamado.css'
})
export class TableChamado {

  chamados: Chamado[] = [
    {
      id: 1, codigo: "S-001", estado: "ABERTA", 
      cliente: "MARIA FERNANDA", descricao: "Asus Vivobook 15", 
      data: "	02/07/2025"
    },
    {
      id: 2, codigo: "S-002", estado: "ABERTA", 
      cliente: "LUCAS B", descricao: "Lenovo Ideapad 3", 
      data: "	07/05/2025"
    },
    {
      id: 3, codigo: "S-003", estado: "ABERTA", 
      cliente: "MATEUS Z", descricao: "	Macbook Air 13", 
      data: "	07/02/2025"
    },
    {
      id: 4, codigo: "S-004", estado: "ABERTA", 
      cliente: "MARIA FERNANDA", descricao: "Asus Vivobook 15", 
      data: "	02/07/2025"
    },
        {
      id: 2, codigo: "S-002", estado: "ABERTA", 
      cliente: "LUCAS B", descricao: "Lenovo Ideapad 3", 
      data: "	07/05/2025"
    },
    {
      id: 3, codigo: "S-003", estado: "ABERTA", 
      cliente: "MATEUS Z", descricao: "	Macbook Air 13", 
      data: "	07/02/2025"
    },
    {
      id: 4, codigo: "S-004", estado: "ABERTA", 
      cliente: "MARIA FERNANDA", descricao: "Asus Vivobook 15", 
      data: "	02/07/2025"
    }
  ]
  
}
