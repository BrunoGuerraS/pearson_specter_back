import * as path from 'path';
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import config from "../config/config";
import { MainSeeder } from "../db/seeders/mainSeeder";

const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: config.dbHost,
  port: config.dbPort.toString() as any,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  logging: true,
  synchronize: false,
  entities: [path.join(__dirname, "../db/entities/*.entity{.ts,.js}")],
  // entities: [Report, TypeReport, PersonInvolved, Place, Status, Evidence, User],
  // migrations: ["src/db/migrations/*.ts"],
  migrations: [path.join(__dirname, "../db/migrations/*.{ts,js}")],
  // seeds: ["src/db/seeders/*.ts"]
  seeds: [MainSeeder],
};

export const myDataSource = new DataSource(options);

myDataSource
  .initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error connecting to database", err));
