import { Module } from '@nestjs/common';
import { ArquivoController } from './arquivo.controller';
import { ArquivoService } from './arquivo.service';
import { arquivoProviders } from './arquivo.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [ArquivoController],
  providers: [ArquivoService, ...arquivoProviders],
})

export class ArquivoModule {}
