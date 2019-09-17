import { Connection, Repository } from 'typeorm';
import { Concurso } from './concurso.entity'

export const concursoProviders = [
	{
		provide: 'CONCURSO_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Concurso),
		inject: ['DATABASE_CONNECTION'],
	}
];
