import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';


import { TiposConcurso } from '../TiposConcurso/tiposconcurso.entity'

@Entity()
export class Concurso {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiModelProperty()
	@OneToOne(type => TiposConcurso)
	@JoinColumn()
	id_tipo_concurso: number;

	@ApiModelProperty()
	@Column()
	nome: string;

	@ApiModelProperty()
	@Column()
	ano_base: number;

	@ApiModelProperty()
	@Column()
	dt_inicio: Date;

	@ApiModelProperty()
	@Column()
	dt_fim: Date;

	@ApiModelProperty()
	@Column()
	descricao: string;
}
