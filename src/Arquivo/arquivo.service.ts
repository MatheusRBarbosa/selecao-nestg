import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Arquivo } from './arquivo.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class ArquivoService extends BaseService<Arquivo>{
	
	constructor(
		@Inject('ARQUIVO_REPOSITORY')
		private readonly arquivoRepository: Repository<Arquivo>
	){
		super(arquivoRepository);
	}
	
}
