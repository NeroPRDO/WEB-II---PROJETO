import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


export interface TableColumn {
  id: string;
  header: string;
  render?: TemplateRef<any>; // You can type this more strictly with generics if needed
}

@Component({
  selector: 'app-table-chamado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './table-chamado.html',
  styleUrls: ['./table-chamado.css'],
})
export class TableChamado {
  @Input() colunas: TableColumn[] = [];
  @Input() data: any[] = [];
}
