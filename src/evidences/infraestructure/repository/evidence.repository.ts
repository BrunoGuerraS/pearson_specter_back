import { CreateEvidenceDTO } from "../../domain/DTO/createEvidence";
import { UpdateEvidenceDTO } from "../../domain/DTO/updateEvidence";
import { IEvidenceRepository } from "../../domain/Repositories/evidence-repository.interface";

export class EvidenceRepository implements IEvidenceRepository {
    constructor() {

    }
    public getEvidenceById(id: any): Promise<any> {
        return Promise.resolve({});
    }
    public createEvidence(evidence: CreateEvidenceDTO): Promise<any> {
        return Promise.resolve({});
    }
    public updateEvidence(id: string, evidence: UpdateEvidenceDTO): Promise<any> {
        return Promise.resolve({});    
    }
    public deleteEvidence(id: string): Promise<any> {
        return Promise.resolve({});
    }
}