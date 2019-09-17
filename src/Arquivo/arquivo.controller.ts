import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ ArquivoService } from './arquivo.service';
import { Arquivo } from './arquivo.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('Arquivo')
@Controller('arquivo')
export class ArquivoController extends BaseController<Arquivo> {
	
	constructor(private readonly service: ArquivoService) {
			super(service)
	}
}
