import { Module } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';
import { RelatorionestController } from 'src/app.controller';

@Module({
  controllers: [RelatorionestController],
  providers: [RelatorioService],
})
export class RelatorioModule {}