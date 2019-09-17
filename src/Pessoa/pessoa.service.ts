import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class PessoaService extends BaseService<Pessoa>{
	
	constructor(
		@Inject('PESSOA_REPOSITORY')
		private readonly pessoaRepository: Repository<Pessoa>
	){
		super(pessoaRepository);
	}
	
}
