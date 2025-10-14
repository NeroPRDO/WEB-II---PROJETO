import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-relatorio-receitas-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorio-receitas-categoria.html',
  styleUrls: ['./relatorio-receitas-categoria.css'],
})
export class RelatorioReceitasCategoria {
  /**
   * Estrutura:
   * [{ categoria: string, total: number }, ...]
   */
  linhas: Array<{ categoria: string; total: number }> = [
    // ===== MOCK =====
    { categoria: 'Notebook', total: 570.0 },
    { categoria: 'Impressora', total: 320.5 },
    { categoria: 'Celular', total: 180.0 },
    { categoria: 'Desktop', total: 250.0 },
    { categoria: 'Monitor', total: 270.0 },
    // ===== /MOCK =====
  ];

  totalGeral(): number {
    return this.linhas.reduce((acc, l) => acc + (Number(l.total) || 0), 0);
  }

  gerarPDF() {
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const M = 14;
    const headerH = 16;
    const footerH = 12;
    const yStart = M + headerH;
    let y = yStart;

    const agora = new Date();
    const dataBR = agora.toLocaleDateString('pt-BR');
    const horaBR = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    const tituloRelatorio = 'Relatório de Receitas por Categoria';

    function header() {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text(tituloRelatorio, M, M);
      doc.setDrawColor(160);
      doc.line(M, M + 4, pageW - M, M + 4);
    }

    function footer(page: number, total: number) {
      const left = `Gerado em ${dataBR} ${horaBR}`;
      const right = `Página ${page}/${total}`;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(90);
      doc.text(left, M, pageH - M + 2);
      doc.text(right, pageW - M, pageH - M + 2, { align: 'right' });
    }

    function newPage() {
      if (doc.getNumberOfPages() > 0) doc.addPage();
      header();
      y = yStart;
    }

    doc.setProperties({
      title: tituloRelatorio,
      subject: 'Receitas agrupadas por categoria',
      author: 'Manutenção de Equipamentos',
    });

    header();

    // Cabeçalho tipo “tabela”
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    if (y + 7 > pageH - footerH - M) newPage();
    doc.text('Categoria', M, y);
    doc.text('Total (R$)', pageW - M, y, { align: 'right' });
    y += 6;
    doc.setFont('helvetica', 'normal');

    // Linhas
    for (const linha of this.linhas) {
      const cat = (linha?.categoria ?? 'Sem categoria').toString();
      const total = Number(linha?.total || 0).toFixed(2);

      if (y + 6 > pageH - footerH - M) newPage();
      doc.text(cat, M, y);
      doc.text(total, pageW - M, y, { align: 'right' });
      y += 6;
    }

    // Total geral
    const tg = this.totalGeral().toFixed(2);
    if (y + 10 > pageH - footerH - M) newPage();
    doc.setFont('helvetica', 'bold');
    doc.text(`TOTAL GERAL: R$ ${tg}`, M, y + 6);

    // Rodapé paginado
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      footer(i, totalPages);
    }

    const safe = (s: string) => s.replace(/[/: ]/g, '-');
    const fileName = `relatorio-receitas-categoria_${agora.toISOString().slice(0, 10)}_${safe(
      horaBR
    )}.pdf`;
    doc.save(fileName);
  }
}
