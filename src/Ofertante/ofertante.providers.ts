import { Connection, Repository } from 'typeorm';
import { Ofertante } from './ofertante.entity'

export const ofertanteProviders = [
	{
		provide: 'OFERTANTE_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Ofertante),
		inject: ['DATABASE_CONNECTION'],
	}
];
