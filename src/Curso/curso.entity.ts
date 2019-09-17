import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';


import { Ofertante } from '../Ofertante/ofertante.entity'

@Entity()
export class Curso {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiModelProperty()
	@OneToOne(type => Ofertante)
	@JoinColumn()
	id_ofertante: number;

	@ApiModelProperty()
	@Column()
	nome: string;

	@ApiModelProperty()
	@Column()
	carga_horaria: number;

	@ApiModelProperty()
	@Column()
	vagas: number;

	@ApiModelProperty()
	@Column()
	turno: number;

	@ApiModelProperty()
	@Column()
	dt_inicio: Date;

	@ApiModelProperty()
	@Column()
	dt_fim: Date;
}
