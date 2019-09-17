import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TiposConcurso } from './tiposconcurso.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class TiposConcursoService extends BaseService<TiposConcurso>{
	
	constructor(
		@Inject('TIPOSCONCURSO_REPOSITORY')
		private readonly tiposconcursoRepository: Repository<TiposConcurso>
	){
		super(tiposconcursoRepository);
	}
	
}
