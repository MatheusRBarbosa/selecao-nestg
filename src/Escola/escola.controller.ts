import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ EscolaService } from './escola.service';
import { Escola } from './escola.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('Escola')
@Controller('escola')
export class EscolaController extends BaseController<Escola> {
	
	constructor(private readonly service: EscolaService) {
			super(service)
	}
}
