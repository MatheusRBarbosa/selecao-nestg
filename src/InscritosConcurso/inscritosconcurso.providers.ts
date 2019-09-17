import { Connection, Repository } from 'typeorm';
import { InscritosConcurso } from './inscritosconcurso.entity'

export const inscritosconcursoProviders = [
	{
		provide: 'INSCRITOSCONCURSO_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(InscritosConcurso),
		inject: ['DATABASE_CONNECTION'],
	}
];
