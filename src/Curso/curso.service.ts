import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Curso } from './curso.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class CursoService extends BaseService<Curso>{
	
	constructor(
		@Inject('CURSO_REPOSITORY')
		private readonly cursoRepository: Repository<Curso>
	){
		super(cursoRepository);
	}
	
}
