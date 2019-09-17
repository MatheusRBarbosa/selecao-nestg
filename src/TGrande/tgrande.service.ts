import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TGrande } from './tgrande.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class TGrandeService extends BaseService<TGrande>{
	
	constructor(
		@Inject('TGRANDE_REPOSITORY')
		private readonly tgrandeRepository: Repository<TGrande>
	){
		super(tgrandeRepository);
	}
	
}
