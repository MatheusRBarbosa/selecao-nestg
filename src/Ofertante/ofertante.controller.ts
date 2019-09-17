import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ OfertanteService } from './ofertante.service';
import { Ofertante } from './ofertante.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('Ofertante')
@Controller('ofertante')
export class OfertanteController extends BaseController<Ofertante> {
	
	constructor(private readonly service: OfertanteService) {
			super(service)
	}
}
