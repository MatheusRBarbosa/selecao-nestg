import { Module } from '@nestjs/common';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';
import { seriesProviders } from './series.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [SeriesController],
  providers: [SeriesService, ...seriesProviders],
})

export class SeriesModule {}
