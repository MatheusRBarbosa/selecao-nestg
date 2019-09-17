import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Inscrito } from './inscrito.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class InscritoService extends BaseService<Inscrito>{
	
	constructor(
		@Inject('INSCRITO_REPOSITORY')
		private readonly inscritoRepository: Repository<Inscrito>
	){
		super(inscritoRepository);
	}
	
}
