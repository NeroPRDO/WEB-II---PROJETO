import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';
import { RelatorioReceitasService } from '../../shared/relatorios/relatorio-receitas.service';

@Component({
  selector: 'app-relatorio-receitas-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorio-receitas-categoria.html',
  styleUrls: ['./relatorio-receitas-categoria.css'],
})
export class RelatorioReceitasCategoria implements OnInit {
  linhas: { categoria: string; total: number }[] = [];

  constructor(private relatorio: RelatorioReceitasService) {}

  ngOnInit(): void {
    this.relatorio.seedMockIfEmpty();
    this.linhas = this.relatorio.groupByCategoria();
  }

  gerarPDF() {
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

    let y = 15;
    doc.setFont('helvetica', 'bold');
    doc.text('Relatório de Receitas por Categoria', 14, y);
    y += 8;
    doc.setFont('helvetica', 'normal');

    // 👉 DATA antes da HORA
    const agora = new Date();
    const dataBR = agora.toLocaleDateString('pt-BR'); // dd/MM/yyyy
    const horaBR = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); // HH:mm
    doc.text(`Gerado em ${dataBR} ${horaBR}`, 14, y);
    y += 8;

    // Cabeçalho da “tabela”
    doc.setFont('helvetica', 'bold');
    doc.text('Categoria', 14, y);
    doc.text('Total (R$)', 160, y, { align: 'right' });
    y += 6;
    doc.setFont('helvetica', 'normal');

    // this.linhas deve ter { categoria, total }
    for (const linha of this.linhas) {
      doc.text(linha.categoria, 14, y);
      doc.text(linha.total.toFixed(2), 160, y, { align: 'right' });
      y += 6;
      if (y > 280) {
        doc.addPage();
        y = 15;
      }
    }

    // Total geral (se existir método)
    if (typeof this.totalGeral === 'function') {
      const total = this.totalGeral().toFixed(2);
      y += 4;
      doc.setFont('helvetica', 'bold');
      doc.text(`TOTAL GERAL: R$ ${total}`, 14, y);
    }

    doc.save('relatorio-receitas-categoria.pdf');
  }

  totalGeral(): number {
    return this.linhas.reduce((acc, l) => acc + l.total, 0);
  }
}
