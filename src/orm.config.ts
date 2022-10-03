import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const db: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'gamegod',
  password: 'password',
  database: 'online_store',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
