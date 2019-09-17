import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Escola } from './escola.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class EscolaService extends BaseService<Escola>{
	
	constructor(
		@Inject('ESCOLA_REPOSITORY')
		private readonly escolaRepository: Repository<Escola>
	){
		super(escolaRepository);
	}
	
}
