import { Module } from '@nestjs/common';
import { CursoController } from './curso.controller';
import { CursoService } from './curso.service';
import { cursoProviders } from './curso.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [CursoController],
  providers: [CursoService, ...cursoProviders],
})

export class CursoModule {}
