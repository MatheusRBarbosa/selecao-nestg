import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ ConcursoService } from './concurso.service';
import { Concurso } from './concurso.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('Concurso')
@Controller('concurso')
export class ConcursoController extends BaseController<Concurso> {
	
	constructor(private readonly service: ConcursoService) {
			super(service)
	}
}
