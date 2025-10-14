import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // necessário para ngModel
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-relatorio-receitas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './relatorio-receitas.html',
  styleUrls: ['./relatorio-receitas.css'],
})
export class RelatorioReceitas {
  // filtros lidos no template
  inicio?: string;
  fim?: string;

  // estado de tela
  carregado = false;

  linhas: any[] = [];

  totalGeral(): number {
    return this.linhas.reduce((acc, d) => acc + (Number(d?.total) || 0), 0);
  }

  // ===== MOCK =====
  private gerarMock(): any[] {
    const hoje = new Date();
    const ontem = new Date(hoje.getTime() - 24 * 60 * 60 * 1000);

    const iso = (d: Date, h: number, m: number) => {
      const dd = new Date(d);
      dd.setHours(h, m, 0, 0);
      return dd.toISOString();
    };

    const diaStr = (d: Date) => d.toISOString().slice(0, 10); // yyyy-mm-dd

    return [
      {
        day: diaStr(ontem),
        total: 580.5,
        itens: [
          {
            dataIso: iso(ontem, 9, 15),
            categoria: 'Notebook',
            descricao: 'Troca de tela',
            valor: 350.0,
          },
          {
            dataIso: iso(ontem, 11, 40),
            categoria: 'Impressora',
            descricao: 'Limpeza e revisão',
            valor: 150.5,
          },
          {
            dataIso: iso(ontem, 16, 5),
            categoria: 'Console',
            descricao: 'Atualização de firmware',
            valor: 80.0,
          },
        ],
      },
      {
        day: diaStr(hoje),
        total: 920.0,
        itens: [
          {
            dataIso: iso(hoje, 10, 5),
            categoria: 'Notebook',
            descricao: 'Troca de teclado',
            valor: 220.0,
          },
          {
            dataIso: iso(hoje, 13, 20),
            categoria: 'Celular',
            descricao: 'Troca de bateria',
            valor: 180.0,
          },
          {
            dataIso: iso(hoje, 15, 45),
            categoria: 'Desktop',
            descricao: 'Formatação + backup',
            valor: 250.0,
          },
          {
            dataIso: iso(hoje, 17, 10),
            categoria: 'Monitor',
            descricao: 'Reparo fonte interna',
            valor: 270.0,
          },
        ],
      },
    ];
  }
  // ===== /MOCK =====

  onFiltrar() {
    // Aqui entraria a chamada real ao service (buscar por período).
    // Enquanto isso, mock:
    this.linhas = this.gerarMock();
    if (this.inicio) {
      const dIni = new Date(`${this.inicio}T00:00:00`);
      this.linhas = this.linhas.filter((l) => new Date(`${l.day}T00:00:00`) >= dIni);
    }
    if (this.fim) {
      const dFim = new Date(`${this.fim}T23:59:59`);
      this.linhas = this.linhas.filter((l) => new Date(`${l.day}T00:00:00`) <= dFim);
    }

    this.carregado = true;
  }

  onLimpar() {
    this.inicio = undefined;
    this.fim = undefined;
    this.linhas = [];
    this.carregado = false;
  }

  // =================== PDF ===================
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

    const tituloRelatorio = 'Relatório de Receitas (por período)';

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
      subject: 'Receitas agrupadas por dia',
      author: 'Manutenção de Equipamentos',
    });

    header();
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);

    // Mostra período (se houver)
    if (this.inicio || this.fim) {
      const fi = this.inicio
        ? new Date(`${this.inicio}T00:00:00`).toLocaleDateString('pt-BR')
        : '—';
      const ff = this.fim ? new Date(`${this.fim}T00:00:00`).toLocaleDateString('pt-BR') : '—';
      doc.text(`Período: ${fi} a ${ff}`, M, y);
      y += 8;
    }

    // Conteúdo por dia
    for (const linha of this.linhas) {
      const dDia = new Date(
        linha?.day && String(linha.day).includes('T') ? linha.day : `${linha?.day}T00:00:00`
      );
      const diaBR = isNaN(dDia.getTime())
        ? String(linha?.day ?? '')
        : dDia.toLocaleDateString('pt-BR');

      const headDia = `Dia: ${diaBR} — Total do dia: R$ ${Number(linha?.total || 0).toFixed(2)}`;
      if (y + 8 > pageH - footerH - M) newPage();
      doc.setFont('helvetica', 'bold');
      doc.text(headDia, M, y);
      y += 7;
      doc.setFont('helvetica', 'normal');

      const itens = Array.isArray(linha?.itens) ? linha.itens : [];
      for (const r of itens) {
        const di = new Date(r?.dataIso);
        const dataItem = isNaN(di.getTime()) ? r?.dataIso ?? '' : di.toLocaleDateString('pt-BR');
        const horaItem = isNaN(di.getTime())
          ? ''
          : di.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        const linhaTxt = `${dataItem}${horaItem ? ' ' + horaItem : ''}  •  ${
          r?.categoria ?? '-'
        }  •  ${r?.descricao ?? '-'}  •  R$ ${(Number(r?.valor) || 0).toFixed(2)}`;

        if (y + 6 > pageH - footerH - M) newPage();
        doc.text(linhaTxt, M + 2, y);
        y += 6;
      }
      y += 2;
    }

    // Total geral
    const tg = this.totalGeral().toFixed(2);
    if (y + 8 > pageH - footerH - M) newPage();
    doc.setFont('helvetica', 'bold');
    doc.text(`TOTAL GERAL: R$ ${tg}`, M, y);

    // Rodapé em todas as páginas
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      footer(i, totalPages);
    }

    const safe = (s: string) => s.replace(/[/: ]/g, '-');
    const fileName = `relatorio-receitas_${agora.toISOString().slice(0, 10)}_${safe(horaBR)}.pdf`;
    doc.save(fileName);
  }
}
