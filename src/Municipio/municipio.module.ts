import { Module } from '@nestjs/common';
import { MunicipioController } from './municipio.controller';
import { MunicipioService } from './municipio.service';
import { municipioProviders } from './municipio.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [MunicipioController],
  providers: [MunicipioService, ...municipioProviders],
})

export class MunicipioModule {}
