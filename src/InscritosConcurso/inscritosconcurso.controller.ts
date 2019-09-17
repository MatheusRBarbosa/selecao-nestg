import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ InscritosConcursoService } from './inscritosconcurso.service';
import { InscritosConcurso } from './inscritosconcurso.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('InscritosConcurso')
@Controller('inscritosconcurso')
export class InscritosConcursoController extends BaseController<InscritosConcurso> {
	
	constructor(private readonly service: InscritosConcursoService) {
			super(service)
	}
}
