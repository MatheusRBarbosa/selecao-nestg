import { Connection, Repository } from 'typeorm';
import { Cronograma } from './cronograma.entity'

export const cronogramaProviders = [
	{
		provide: 'CRONOGRAMA_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Cronograma),
		inject: ['DATABASE_CONNECTION'],
	}
];
