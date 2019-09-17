import { Connection, Repository } from 'typeorm';
import { Sre } from './sre.entity'

export const sreProviders = [
	{
		provide: 'SRE_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Sre),
		inject: ['DATABASE_CONNECTION'],
	}
];
