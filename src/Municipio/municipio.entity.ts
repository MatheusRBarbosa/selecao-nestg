import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';


@Entity()
export class Municipio {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiModelProperty()
	@Column()
	@IsNotEmpty()
	@IsString()
	nome: string;
}
