import { Connection, Repository } from 'typeorm';
import { TGrande } from './tgrande.entity'

export const tgrandeProviders = [
	{
		provide: 'TGRANDE_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(TGrande),
		inject: ['DATABASE_CONNECTION'],
	}
];
