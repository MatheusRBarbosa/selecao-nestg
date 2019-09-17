import { Module } from '@nestjs/common';
import { TGrandeController } from './tgrande.controller';
import { TGrandeService } from './tgrande.service';
import { tgrandeProviders } from './tgrande.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [TGrandeController],
  providers: [TGrandeService, ...tgrandeProviders],
})

export class TGrandeModule {}
