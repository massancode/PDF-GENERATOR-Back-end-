import { Injectable } from '@nestjs/common';
import { PDFDocument, StandardFonts } from 'pdf-lib';

@Injectable()
export class RelatorioService {
  async gerarPdf(aluno: any): Promise<Buffer> {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText(`Nome: ${aluno.nome}`, { x: 50, y: 700, size: 14, font });
    page.drawText(`Curso: ${aluno.curso}`, { x: 50, y: 680, size: 14, font });

    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes);
  }
}