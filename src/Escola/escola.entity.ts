import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';


import { Sre } from '../Sre/sre.entity'
import { Municipio } from '../Municipio/municipio.entity'

@Entity()
export class Escola {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiModelProperty()
	@OneToOne(type => Sre)
	@JoinColumn()
	id_sre: number;

	@ApiModelProperty()
	@OneToOne(type => Municipio)
	@JoinColumn()
	id_municipio: number;

	@ApiModelProperty()
	@Column()
	nome: string;

	@ApiModelProperty()
	@Column()
	inep: string;

	@ApiModelProperty()
	@Column()
	ativo: boolean;

	@ApiModelProperty()
	@Column()
	dt_cadastro: Date;
}
