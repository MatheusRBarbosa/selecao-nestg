import { Module } from '@nestjs/common';
import { TiposConcursoController } from './tiposconcurso.controller';
import { TiposConcursoService } from './tiposconcurso.service';
import { tiposconcursoProviders } from './tiposconcurso.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [TiposConcursoController],
  providers: [TiposConcursoService, ...tiposconcursoProviders],
})

export class TiposConcursoModule {}
