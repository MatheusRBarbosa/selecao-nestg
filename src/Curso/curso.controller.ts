import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ CursoService } from './curso.service';
import { Curso } from './curso.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('Curso')
@Controller('curso')
export class CursoController extends BaseController<Curso> {
	
	constructor(private readonly service: CursoService) {
			super(service)
	}
}
