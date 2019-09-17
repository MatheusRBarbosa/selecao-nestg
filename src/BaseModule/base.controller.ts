import { Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import { IBaseService } from './IBase.interface';

export class BaseController<T>{
    
    constructor(
        private readonly baseService: IBaseService<T>
    ){}

    @Get()
    @ApiOperation({
        title: 'Find all',
        description: 'Find all records of this entity'
    })
    @ApiResponse({
        status: 200,
        description: 'All records was retrieved successfully',
        isArray: true
    })
    public async findAll(@Res() res): Promise<T[]>{
        try{
			return res
		 			.status(HttpStatus.OK)
			 		.send(await this.baseService.findAll());
		}
		catch(error){
			const badGateWay = HttpStatus.BAD_GATEWAY;
			res
				.status(badGateWay)
	 			.send({error, badGateWay});
		}
    }

    @Get(':id')
    @ApiOperation({
        title: 'Find one',
        description: 'Find one record of this entity'
    })
    @ApiResponse({
        status: 200,
        description: 'The record was retrieved successfully',
        isArray: false
    })
    @ApiImplicitParam({
        name: 'id',
        description: 'Record ID',
        required: true, //or false
        type: 'number'
    })
	public async findOne(@Res() res, @Param('id') id): Promise<T> {
		try{
			return res
			 	.status(HttpStatus.OK)
			 	.send(await this.baseService.findOne(id));
		}
		catch(error){
			const badGateWay = HttpStatus.BAD_GATEWAY;
			res
				 .status(badGateWay)
				 .send({error, badGateWay});
		}
    }
    
    @Post()
	@ApiOperation({
        title: 'Create one',
        description: 'Create an entity record'
    })
    @ApiResponse({
        status: 200,
        description: 'The record was created successfully',
        isArray: false // or true
    })
	public async createOne(@Res() res, @Body() object: T): Promise<void> {
		try{
			res
			 .status(HttpStatus.OK)
			 .send(await this.baseService.createOne(object));
		}
		catch(error){
			const badGateWay = HttpStatus.BAD_GATEWAY;
			res
				 .status(badGateWay)
				 .send({error, badGateWay});
		}
    }
    
    @Put(':id')
	@ApiOperation({
        title: 'Update one',
        description: 'Update an entity record'
    })
    @ApiResponse({
        status: 200,
        description: 'The record was updated successfully',
        isArray: false
    })
    @ApiImplicitParam({
        name: 'id',
        description: 'Record ID',
        required: true, //or false
        type: 'number'
    })
    public async updateOne(@Res() res, @Param('id') id, @Body() object: T): Promise<void> {
		try{
			res
			 .status(HttpStatus.OK)
			 .send(await this.baseService.updateOne(id, object));
		}
		catch(error){
			const badGateWay = HttpStatus.BAD_GATEWAY;
			res
			 .status(badGateWay)
			 .send({error, badGateWay});
		}
    }
    
    @Delete(':id')
	@ApiOperation({
        title: 'Delete one',
        description: 'Delete an entity record'
    })
    @ApiResponse({
        status: 200,
        description: 'The record was deleted successfully',
        isArray: false
    })
    @ApiImplicitParam({
        name: 'id',
        description: 'Record ID',
        required: true, //or false
        type: 'number'
    })		    
	public async deleteOne(@Res() res, @Param('id') id): Promise<void> {
		try{
			res
			 .status(HttpStatus.OK)
			 .send(await this.baseService.deleteOne(id));
		}
		catch(error){
			const badGateWay = HttpStatus.BAD_GATEWAY;
			res
			 .status(badGateWay)
			 .send({error, badGateWay});
		}
	}
}
