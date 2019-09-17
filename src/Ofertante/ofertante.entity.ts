import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';


import { Municipio } from '../Municipio/municipio.entity'

@Entity()
export class Ofertante {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiModelProperty()
	@Column()
	nome: string;

	@ApiModelProperty()
	@Column()
	municipio: string;

	@ApiModelProperty()
	@Column()
	nome_fantasia: string;

	@ApiModelProperty()
	@OneToOne(type => Municipio)
	@JoinColumn()
	id_municipio: number;
}
