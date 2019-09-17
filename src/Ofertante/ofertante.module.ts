import { Module } from '@nestjs/common';
import { OfertanteController } from './ofertante.controller';
import { OfertanteService } from './ofertante.service';
import { ofertanteProviders } from './ofertante.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [OfertanteController],
  providers: [OfertanteService, ...ofertanteProviders],
})

export class OfertanteModule {}
