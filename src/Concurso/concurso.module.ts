import { Module } from '@nestjs/common';
import { ConcursoController } from './concurso.controller';
import { ConcursoService } from './concurso.service';
import { concursoProviders } from './concurso.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [ConcursoController],
  providers: [ConcursoService, ...concursoProviders],
})

export class ConcursoModule {}
