import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';


import { Curso } from '../Curso/curso.entity'
import { Concurso } from '../Concurso/concurso.entity'

@Entity()
export class Inscrito {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiModelProperty()
	@OneToOne(type => Curso)
	@JoinColumn()
	id_curso: number;

	@ApiModelProperty()
	@OneToOne(type => Concurso)
	@JoinColumn()
	id_concurso: number;

	@ApiModelProperty()
	@Column()
	rm_aluno: number;

	@ApiModelProperty()
	@Column()
	dt_nascimento: Date;

	@ApiModelProperty()
	@Column()
	num_telefone: number;

	@ApiModelProperty()
	@Column()
	dt_inscricao: Date;

	@ApiModelProperty()
	@Column()
	nome_aluno: string;

	@ApiModelProperty()
	@Column()
	num_celular: number;

	@ApiModelProperty()
	@Column()
	cpf: string;

	@ApiModelProperty()
	@Column()
	pne: string;

	@ApiModelProperty()
	@Column()
	num_telefone2: number;

	@ApiModelProperty()
	@Column()
	email: string;

	@ApiModelProperty()
	@Column()
	aluno_rede: number;

	@ApiModelProperty()
	@Column()
	nome_mae: string;
}
