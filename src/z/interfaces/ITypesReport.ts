import { IReport } from "./IReport";

export enum TypeReport {
    dicriminacion = 'DISCRIMINACION',
    acosoLaboral = 'ACOSO LABORAL',
    represalia = 'REPRESALIAS',
    conflictoDeIntereses = 'CONFLICTO DE INTERESES',
    medioAmbiente = 'MEDIO AMBIENTE',
    saludOcupacional = 'SALUD OCUPACIONAL',
    acosoSexual = 'ACOSO SEXUAL',
    roboHurto = 'ROBO O HURTO',
    corrupcion = 'CORRUPCIÓN / SOBORNOS / REGALOS',
    comisionesIlegales = 'COMISIONES ILEGALES',
    deshonestidad = 'DESHONESTIDAD',
    fugaInformacion = 'FUGA DE INFORMACION CONFIDENCIAL',
    lavadoDinero = 'LAVADO DE DINERO',
    traficoInfluencias = 'TRAFICO DE INFLUENCIAS',
    colusion = 'COLUSION',
    incumplimiento = 'INCUMPLIMIENTO DE POLITICAS / PROCEDIMIENTOS',
    otros = 'OTROS QUE IMPLIQUE PERJUICIO ECONOMICO',
}
export interface ITypeReport {
    id: number
    name: string;
    report: IReport[]
}