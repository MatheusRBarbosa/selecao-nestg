import { Module } from '@nestjs/common';
import { CronogramaController } from './cronograma.controller';
import { CronogramaService } from './cronograma.service';
import { cronogramaProviders } from './cronograma.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [CronogramaController],
  providers: [CronogramaService, ...cronogramaProviders],
})

export class CronogramaModule {}
