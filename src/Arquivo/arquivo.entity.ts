import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';


import { Concurso } from '../Concurso/concurso.entity'

@Entity()
export class Arquivo {

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
	descricao: string;

	@ApiModelProperty()
	@Column()
	dt_upload: Date;

	@ApiModelProperty()
	@Column()
	dt_publish_ini: Date;

	@ApiModelProperty()
	@Column()
	dt_publish_fim: Date;

	@ApiModelProperty()
	@Column()
	content: string;

	@ApiModelProperty()
	@Column()
	content_type: string;

	@ApiModelProperty()
	@Column()
	extensao: string;

	@ApiModelProperty()
	@Column()
	nome_fisico: string;
}
