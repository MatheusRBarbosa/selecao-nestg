import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ TGrandeService } from './tgrande.service';
import { TGrande } from './tgrande.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('TGrande')
@Controller('tgrande')
export class TGrandeController extends BaseController<TGrande> {
	
	constructor(private readonly service: TGrandeService) {
			super(service)
	}
}
