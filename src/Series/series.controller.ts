import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ SeriesService } from './series.service';
import { Series } from './series.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('Series')
@Controller('series')
export class SeriesController extends BaseController<Series> {
	
	constructor(private readonly service: SeriesService) {
			super(service)
	}
}
