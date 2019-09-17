import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa.entity';
import { BaseController } from '../BaseModule/base.controller';

@ApiUseTags('Pessoa')
@Controller('pessoa')
export class PessoaController extends BaseController<Pessoa> {
	
	constructor(private readonly service: PessoaService) {
			super(service)
	}
}
