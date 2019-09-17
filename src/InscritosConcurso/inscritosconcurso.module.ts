import { Module } from '@nestjs/common';
import { InscritosConcursoController } from './inscritosconcurso.controller';
import { InscritosConcursoService } from './inscritosconcurso.service';
import { inscritosconcursoProviders } from './inscritosconcurso.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [InscritosConcursoController],
  providers: [InscritosConcursoService, ...inscritosconcursoProviders],
})

export class InscritosConcursoModule {}
