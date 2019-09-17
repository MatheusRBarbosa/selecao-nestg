import { Connection, Repository } from 'typeorm';
import { Series } from './series.entity'

export const seriesProviders = [
	{
		provide: 'SERIES_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Series),
		inject: ['DATABASE_CONNECTION'],
	}
];
