export default {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: ['src/**/*.entity.ts'],
    seeds: ['src/db/seeding/seeds/**/*{.ts,.js}'],
    factories: ['src/db/seeding/factories/**/*{.ts,.js}'],
  };