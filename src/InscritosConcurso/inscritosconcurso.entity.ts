import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';


import { Inscrito } from '../Inscrito/inscrito.entity'

@Entity()
export class InscritosConcurso {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiModelProperty()
	@OneToOne(type => Inscrito)
	@JoinColumn()
	id_inscrito: number;

	@ApiModelProperty()
	@Column()
	numero: number;

	@ApiModelProperty()
	@Column()
	logradouro: string;

	@ApiModelProperty()
	@Column()
	cep: number;

	@ApiModelProperty()
	@Column()
	bairro: string;

	@ApiModelProperty()
	@Column()
	municipio: string;

	@ApiModelProperty()
	@Column()
	escola: string;

	@ApiModelProperty()
	@Column()
	media_port: number;

	@ApiModelProperty()
	@Column()
	media_mat: number;

	@ApiModelProperty()
	@Column()
	serie: number;

	@ApiModelProperty()
	@Column()
	turno: number;

	@ApiModelProperty()
	@Column()
	media_fisica: number;

	@ApiModelProperty()
	@Column()
	media_quimica: number;

	@ApiModelProperty()
	@Column()
	media_biologia: number;
}
