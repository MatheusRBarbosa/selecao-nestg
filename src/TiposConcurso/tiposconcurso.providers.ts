import { Connection, Repository } from 'typeorm';
import { TiposConcurso } from './tiposconcurso.entity'

export const tiposconcursoProviders = [
	{
		provide: 'TIPOSCONCURSO_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(TiposConcurso),
		inject: ['DATABASE_CONNECTION'],
	}
];
