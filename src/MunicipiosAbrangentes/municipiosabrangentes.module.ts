import { Module } from '@nestjs/common';
import { MunicipiosAbrangentesController } from './municipiosabrangentes.controller';
import { MunicipiosAbrangentesService } from './municipiosabrangentes.service';
import { municipiosabrangentesProviders } from './municipiosabrangentes.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [MunicipiosAbrangentesController],
  providers: [MunicipiosAbrangentesService, ...municipiosabrangentesProviders],
})

export class MunicipiosAbrangentesModule {}
