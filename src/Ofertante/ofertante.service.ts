import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Ofertante } from './ofertante.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class OfertanteService extends BaseService<Ofertante>{
	
	constructor(
		@Inject('OFERTANTE_REPOSITORY')
		private readonly ofertanteRepository: Repository<Ofertante>
	){
		super(ofertanteRepository);
	}
	
}
