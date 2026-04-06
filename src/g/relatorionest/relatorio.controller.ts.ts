import { Controller, Get, Param } from '@nestjs/common';

@Controller('relatorio')
export class RelatorionestController {

  @Get(':id')
  buscar(@Param('id') id: string) {
    return { id };
  }

}