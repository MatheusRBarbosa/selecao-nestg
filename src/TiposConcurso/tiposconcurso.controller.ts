import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ TiposConcursoService } from './tiposconcurso.service';
import { TiposConcurso } from './tiposconcurso.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('TiposConcurso')
@Controller('tiposconcurso')
export class TiposConcursoController extends BaseController<TiposConcurso> {
	
	constructor(private readonly service: TiposConcursoService) {
			super(service)
	}
}
