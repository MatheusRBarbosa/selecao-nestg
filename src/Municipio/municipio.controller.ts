import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ MunicipioService } from './municipio.service';
import { Municipio } from './municipio.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('Municipio')
@Controller('municipio')
export class MunicipioController extends BaseController<Municipio> {
	
	constructor(private readonly service: MunicipioService) {
			super(service)
	}
}
