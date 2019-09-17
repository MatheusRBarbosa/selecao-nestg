import * as dotenv from 'dotenv';
if ( process.env.NODE_ENV != 'production' ) {
    dotenv.config();
}
const db_host = process.env.HOST;
const db_port: number = Number( process.env.PORT );
const db_username = process.env.USER;
const db_password = process.env.PASSWORD;
const db_schema = process.env.SCHEMA;
const orm_sync: boolean = Boolean( process.env.ORM_SYNC == 'true' ) || false;

export class DatabaseConfig {
    constructor(
        readonly type: 'postgres' = 'postgres',
        readonly host: string = db_host,
        readonly port: number = db_port,
        readonly user: string = db_username,
        readonly password = db_password,
        readonly schema = db_schema,
        readonly sync = orm_sync
    ) { }
}
