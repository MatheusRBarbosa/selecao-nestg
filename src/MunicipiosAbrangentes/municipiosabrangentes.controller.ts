import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ MunicipiosAbrangentesService } from './municipiosabrangentes.service';
import { MunicipiosAbrangentes } from './municipiosabrangentes.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('MunicipiosAbrangentes')
@Controller('municipiosabrangentes')
export class MunicipiosAbrangentesController extends BaseController<MunicipiosAbrangentes> {
	
	constructor(private readonly service: MunicipiosAbrangentesService) {
			super(service)
	}
}
