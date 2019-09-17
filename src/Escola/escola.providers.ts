import { Connection, Repository } from 'typeorm';
import { Escola } from './escola.entity'

export const escolaProviders = [
	{
		provide: 'ESCOLA_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Escola),
		inject: ['DATABASE_CONNECTION'],
	}
];
