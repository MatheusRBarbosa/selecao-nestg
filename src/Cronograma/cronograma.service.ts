import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cronograma } from './cronograma.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class CronogramaService extends BaseService<Cronograma>{
	
	constructor(
		@Inject('CRONOGRAMA_REPOSITORY')
		private readonly cronogramaRepository: Repository<Cronograma>
	){
		super(cronogramaRepository);
	}
	
}
