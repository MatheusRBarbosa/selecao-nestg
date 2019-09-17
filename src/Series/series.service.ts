import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Series } from './series.entity';
import { BaseService } from "../BaseModule/base.service";

@Injectable()
export class SeriesService extends BaseService<Series>{
	
	constructor(
		@Inject('SERIES_REPOSITORY')
		private readonly seriesRepository: Repository<Series>
	){
		super(seriesRepository);
	}
	
}
