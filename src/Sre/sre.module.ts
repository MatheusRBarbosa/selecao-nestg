import { Module } from '@nestjs/common';
import { SreController } from './sre.controller';
import { SreService } from './sre.service';
import { sreProviders } from './sre.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [SreController],
  providers: [SreService, ...sreProviders],
})

export class SreModule {}
