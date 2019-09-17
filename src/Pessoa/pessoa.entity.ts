import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';



@Entity()
export class Pessoa {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiModelProperty()
	@Column()
	nome: string;
}
