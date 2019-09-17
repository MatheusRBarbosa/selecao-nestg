import { createConnection } from 'typeorm';
import { DatabaseConfig } from '../common/configs/database.configs'

const config: DatabaseConfig = new DatabaseConfig();

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: config.type,
      host: config.host,
      port: config.port,
      username: config.user,
      password: config.password,
      database: config.schema,
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: config.sync,
    }),
  },
];
