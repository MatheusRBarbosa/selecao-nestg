import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Municipio } from './municipio.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class MunicipioService extends BaseService<Municipio>{
	
	constructor(
		@Inject('MUNICIPIO_REPOSITORY')
		private readonly municipioRepository: Repository<Municipio>
	){
		super(municipioRepository);
	}
	
}
