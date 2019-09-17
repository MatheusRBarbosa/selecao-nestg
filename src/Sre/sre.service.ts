import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Sre } from './sre.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class SreService extends BaseService<Sre>{
	
	constructor(
		@Inject('SRE_REPOSITORY')
		private readonly sreRepository: Repository<Sre>
	){
		super(sreRepository);
	}
	
}
