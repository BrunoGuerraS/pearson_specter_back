import { DataSource } from "typeorm";
import { runSeeder, Seeder, SeederFactoryManager } from "typeorm-extension";
import { StatusSeeder } from "./status.seed";
import { TypeReportSeeder } from "./typesReport.seed";

export class MainSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        await runSeeder(dataSource, TypeReportSeeder)
        await runSeeder(dataSource, StatusSeeder)
    }

}