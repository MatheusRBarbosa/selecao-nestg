import { Connection, Repository } from 'typeorm';
import { Inscrito } from './inscrito.entity'

export const inscritoProviders = [
	{
		provide: 'INSCRITO_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Inscrito),
		inject: ['DATABASE_CONNECTION'],
	}
];
