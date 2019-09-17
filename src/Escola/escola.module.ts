import { Module } from '@nestjs/common';
import { EscolaController } from './escola.controller';
import { EscolaService } from './escola.service';
import { escolaProviders } from './escola.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [EscolaController],
  providers: [EscolaService, ...escolaProviders],
})

export class EscolaModule {}
