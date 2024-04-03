import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { TypeReport } from "../entities/typeReport.entity";

export class TypeReportSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const typeReportRepository = dataSource.getRepository(TypeReport)
        await typeReportRepository.save([
            {
                name: "DISCRIMINACION"
            },
            {
                name: "ACOSO LABORAL"
            },
            {
                name: "REPRESALIAS"
            },
            {
                name: "CONFLICTO DE INTERESES"
            },
            {
                name: "MEDIO AMBIENTE"
            },
            {
                name: "SALUD OCUPACIONAL"
            },
            {
                name: "ACOSO SEXUAL"
            },
            {
                name: "ROBO O HURTO"
            },
            {
                name: "CORRUPCIÓN / SOBORNOS / REGALOS"
            },
            {
                name: "COMISIONES ILEGALES"
            },
            {
                name: "DESHONESTIDAD"
            },
            {
                name: "FUGA DE INFORMACION CONFIDENCIAL"
            },
            {
                name: "LAVADO DE DINERO"
            },
            {
                name: "TRAFICO DE INFLUENCIAS"
            },
            {
                name: "COLUSION"
            },
            {
                name: "INCUMPLIMIENTO DE POLITICAS / PROCEDIMIENTOS"
            },
            {
                name: "OTROS QUE IMPLIQUE PERJUICIO ECONOMICO"
            }


        ])
    }
    
}