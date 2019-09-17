import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';



@Entity()
export class TGrande {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: number;
	
	@ApiModelProperty()
	@Column()
	ip: number;
}
