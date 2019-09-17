import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MunicipiosAbrangentes } from './municipiosabrangentes.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class MunicipiosAbrangentesService extends BaseService<MunicipiosAbrangentes>{
	
	constructor(
		@Inject('MUNICIPIOSABRANGENTES_REPOSITORY')
		private readonly municipiosabrangentesRepository: Repository<MunicipiosAbrangentes>
	){
		super(municipiosabrangentesRepository);
	}
	
}
