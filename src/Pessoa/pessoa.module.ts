import { Module } from '@nestjs/common';
import { PessoaController } from './pessoa.controller';
import { PessoaService } from './pessoa.service';
import { pessoaProviders } from './pessoa.providers'
import { DatabaseModule } from '../Database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [PessoaController],
  providers: [PessoaService, ...pessoaProviders],
})

export class PessoaModule {}
