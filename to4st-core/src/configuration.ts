/* istanbul ignore file */
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  ip: process.env.IP ?? '0.0.0.0',
  forceResetPassword: !!process.env.RESET_PASSWORD,
  password: process.env.PASSWORD ?? '',
  instanceId: process.env.INSTANCE_ID ?? 'default',
  database: {
    type: process.env.DATABASE_TYPE ?? 'sqlite',
    database: process.env.DATABASE ?? 'to4st-core',
    sqlitepath: process.env.SQLITE_PATH ?? './../sqlite/db-core.sqlite',
    host: process.env.DATABASE_HOST ?? '127.0.0.1',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME ?? 'postgres',
    password: process.env.DATABASE_PASSWORD ?? 'th120',
  },
});
