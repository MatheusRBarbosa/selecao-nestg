import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Concurso } from './concurso.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class ConcursoService extends BaseService<Concurso>{
	
	constructor(
		@Inject('CONCURSO_REPOSITORY')
		private readonly concursoRepository: Repository<Concurso>
	){
		super(concursoRepository);
	}
	
}
