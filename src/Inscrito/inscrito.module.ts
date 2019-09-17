import { Module } from '@nestjs/common';
import { InscritoController } from './inscrito.controller';
import { InscritoService } from './inscrito.service';
import { inscritoProviders } from './inscrito.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [InscritoController],
  providers: [InscritoService, ...inscritoProviders],
})

export class InscritoModule {}
