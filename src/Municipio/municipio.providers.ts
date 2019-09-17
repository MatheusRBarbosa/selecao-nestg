import { Connection, Repository } from 'typeorm';
import { Municipio } from './municipio.entity'

export const municipioProviders = [
	{
		provide: 'MUNICIPIO_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Municipio),
		inject: ['DATABASE_CONNECTION'],
	}
];
