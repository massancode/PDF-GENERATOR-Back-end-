import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelatorioModule } from './relatorio/relatorio.module';

@Module({
  imports: [
    RelatorioModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ só dev
    }),
  ],
})
export class AppModule {}