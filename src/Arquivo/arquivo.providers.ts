import { Connection, Repository } from 'typeorm';
import { Arquivo } from './arquivo.entity'

export const arquivoProviders = [
	{
		provide: 'ARQUIVO_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Arquivo),
		inject: ['DATABASE_CONNECTION'],
	}
];
