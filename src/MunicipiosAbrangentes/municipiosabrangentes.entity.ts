import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, OneToOne, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';



@Entity()
export class MunicipiosAbrangentes {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiModelProperty()
	@Column()
	id_concurso: number;

	@ApiModelProperty()
	@Column()
	id_ofertante: number;

	@ApiModelProperty()
	@Column()
	id_municipio: number;
}
