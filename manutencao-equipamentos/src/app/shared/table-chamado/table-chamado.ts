import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface TableColumn {
  id: string;
  header: string;
  render?: TemplateRef<any>; // You can type this more strictly with generics if needed
}

@Component({
  selector: 'app-table-chamado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-chamado.html',
  styleUrls: ['./table-chamado.css'],
})
export class TableChamado {
  @Input() colunas: TableColumn[] = [];
  @Input() data: any[] = [];
}