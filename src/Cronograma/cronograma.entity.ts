import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';


import { Concurso } from '../Concurso/concurso.entity'

@Entity()
export class Cronograma {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiModelProperty()
	@OneToOne(type => Concurso)
	@JoinColumn()
	id_concurso: number;

	@ApiModelProperty()
	@Column()
	nome: string;

	@ApiModelProperty()
	@Column()
	dt_inicio: Date;

	@ApiModelProperty()
	@Column()
	dt_fim: Date;

	@ApiModelProperty()
	@Column()
	obs: string;
}
