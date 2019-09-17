import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ InscritoService } from './inscrito.service';
import { Inscrito } from './inscrito.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('Inscrito')
@Controller('inscrito')
export class InscritoController extends BaseController<Inscrito> {
	
	constructor(private readonly service: InscritoService) {
			super(service)
	}
}
