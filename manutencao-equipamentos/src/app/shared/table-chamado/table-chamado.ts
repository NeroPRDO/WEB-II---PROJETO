import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


export interface TableColumn {
  id: string;
  header: string;
  render?: TemplateRef<any>;
  headerStyle?: string;
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

  @Output() action = new EventEmitter<any>();
}
