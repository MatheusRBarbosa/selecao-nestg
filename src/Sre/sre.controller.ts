import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ SreService } from './sre.service';
import { Sre } from './sre.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('Sre')
@Controller('sre')
export class SreController extends BaseController<Sre> {
	
	constructor(private readonly service: SreService) {
			super(service)
	}
}
