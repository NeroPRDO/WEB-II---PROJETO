import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  jsPDF from 'jspdf';
import {
  RelatorioReceitasService,
  Receita,
} from '../../shared/relatorios/relatorio-receitas.service';

@Component({
  selector: 'app-relatorio-receitas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './relatorio-receitas.html',
  styleUrls: ['./relatorio-receitas.css'],
})
export class RelatorioReceitas implements OnInit {
  inicio?: string; // yyyy-mm-dd
  fim?: string; // yyyy-mm-dd

  carregado = false;
  linhas: { day: string; total: number; itens: Receita[] }[] = [];

  constructor(private relatorio: RelatorioReceitasService) {}

  ngOnInit(): void {
    this.relatorio.seedMockIfEmpty();
    this.onFiltrar(); // carrega tudo inicialmente
  }

  onFiltrar() {
    const dIni = this.inicio ? new Date(this.inicio) : null;
    const dFim = this.fim ? new Date(this.fim) : null;
    const dados = this.relatorio.queryPorPeriodo(dIni, dFim);
    this.linhas = this.relatorio.groupByDay(dados);
    this.carregado = true;
  }

  onLimpar() {
    this.inicio = undefined;
    this.fim = undefined;
    this.onFiltrar();
  }

  gerarPDF() {
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

    let y = 15;
    doc.setFont('helvetica', 'bold');
    doc.text('Relatório de Receitas (por período)', 14, y);
    y += 8;
    doc.setFont('helvetica', 'normal');

    for (const linha of this.linhas) {
      // ---------------------------
      // FORMATAÇÃO DA DATA DO DIA
      // ---------------------------
      // `linha.day` costuma vir como "YYYY-MM-DD" (chave do agrupamento).
      // Para garantir que o Date parseie corretamente, adicionamos "T00:00:00".
      const dayDate = new Date(linha.day.includes('T') ? linha.day : `${linha.day}T00:00:00`);
      const dayLabelBR = dayDate.toLocaleDateString('pt-BR'); // dd/MM/yyyy

      // Cabeçalho do dia
      doc.setFont('helvetica', 'bold');
      doc.text(`Dia: ${dayLabelBR}  -  Total: R$ ${linha.total.toFixed(2)}`, 14, y);
      y += 6;
      doc.setFont('helvetica', 'normal');

      // Linhas (itens)
      for (const r of linha.itens) {
        const d = new Date(r.dataIso);

        // 👉 ORDEM AJUSTADA: DATA antes da HORA
        const dataBR = d.toLocaleDateString('pt-BR'); // dd/MM/yyyy
        const horaBR = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); // HH:mm

        const txt = `${dataBR} ${horaBR} | ${r.categoria} | ${
          r.descricao ?? '-'
        } | R$ ${r.valor.toFixed(2)}`;
        doc.text(txt, 16, y);
        y += 6;

        if (y > 280) {
          doc.addPage();
          y = 15;
        }
      }

      y += 4;
      if (y > 285) {
        doc.addPage();
        y = 15;
      }
    }

    const totalGeral = this.totalGeral().toFixed(2);
    doc.text(`TOTAL GERAL: R$ ${totalGeral}`, 14, y + 6);

    doc.save('relatorio-receitas.pdf');
  }

  totalGeral(): number {
    return this.linhas.reduce((acc, l) => acc + l.total, 0);
  }
}
