import { Module } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';
import { RelatorionestController } from 'src/g/relatorionest/relatorio.controller.ts';

@Module({
  controllers: [RelatorionestController],
  providers: [RelatorioService],
})
export class RelatorioModule {}