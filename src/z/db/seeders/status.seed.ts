import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Status } from "../entities/status.entity";

export class StatusSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const typeReportRepository = dataSource.getRepository(Status)
        await typeReportRepository.save([
            {
                name: 'ENVIADA'
            },
            {
                name: 'RECIBIDA'
            },
            {
                name: 'EN PROCESO'
            },
            {
                name: 'ARCHIVADA'
            },
            {
                name: 'RESUELTA'
            },
        ])
    }
    
}