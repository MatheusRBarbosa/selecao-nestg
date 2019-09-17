import { Connection, Repository } from 'typeorm';
import { Curso } from './curso.entity'

export const cursoProviders = [
	{
		provide: 'CURSO_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Curso),
		inject: ['DATABASE_CONNECTION'],
	}
];
