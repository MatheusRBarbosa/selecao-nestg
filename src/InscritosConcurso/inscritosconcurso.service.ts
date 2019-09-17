import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InscritosConcurso } from './inscritosconcurso.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class InscritosConcursoService extends BaseService<InscritosConcurso>{
	
	constructor(
		@Inject('INSCRITOSCONCURSO_REPOSITORY')
		private readonly inscritosconcursoRepository: Repository<InscritosConcurso>
	){
		super(inscritosconcursoRepository);
	}
	
}
