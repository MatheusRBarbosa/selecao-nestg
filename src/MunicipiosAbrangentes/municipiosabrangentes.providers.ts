import { Connection, Repository } from 'typeorm';
import { MunicipiosAbrangentes } from './municipiosabrangentes.entity'

export const municipiosabrangentesProviders = [
	{
		provide: 'MUNICIPIOSABRANGENTES_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(MunicipiosAbrangentes),
		inject: ['DATABASE_CONNECTION'],
	}
];
