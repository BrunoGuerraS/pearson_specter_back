import * as path from 'path';
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import ENV from '../config/envs';
// import { MainSeeder } from "../db/seeders/mainSeeder";

const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: ENV.db.host,
  port: Number(ENV.db.port),
  username: ENV.db.username,
  password: ENV.db.password,
  database: ENV.db.dbName,
  logging: true,
  synchronize: false,
  entities: [path.join(__dirname, "../../**/*.entity{.ts,.js}")],

  migrations: [path.join(__dirname, "../db/migrations/*.{ts,js}")],
  // seeds: ["src/db/seeders/*.ts"]
//   seeds: [MainSeeder],
};

export const myDataSource = new DataSource(options);

myDataSource
  .initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error connecting to database", err));
