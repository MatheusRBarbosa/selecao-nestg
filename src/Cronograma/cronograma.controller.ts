import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ CronogramaService } from './cronograma.service';
import { Cronograma } from './cronograma.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('Cronograma')
@Controller('cronograma')
export class CronogramaController extends BaseController<Cronograma> {
	
	constructor(private readonly service: CronogramaService) {
			super(service)
	}
}
