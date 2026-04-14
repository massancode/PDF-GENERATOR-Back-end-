import { Controller, Get, Param, Res } from '@nestjs/common';
import type { Response } from 'express';
import { RelatorioService } from './relatorio/relatorio.service';


@Controller('relatorio')
export class RelatorionestController {

  constructor(private readonly service: RelatorioService) {}

  @Get(':id')
  async gerar(@Param('id') id: string, @Res() res: Response) {

    // mock (depois vem banco)
    const aluno = {
      id,
      nome: 'Fernando Lucas',
      curso: 'Engenharia de Software',
    };

    const pdf = await this.service.gerarPdf(aluno);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=relatorio.pdf',
    });

    res.send(pdf);
  }
}