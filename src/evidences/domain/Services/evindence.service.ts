import { CreateEvidenceDTO } from "../DTO/createEvidence";
import { UpdateEvidenceDTO } from "../DTO/updateEvidence";
import { IEvidenceRepository } from "../Repositories/evidence-repository.interface";

export class EvidenceDomainService {
    constructor(private readonly evidenceReposritory: IEvidenceRepository){

    }
    public async getEvidenceById(id: any) {
        return await this.evidenceReposritory.getEvidenceById(id);
    }
    public async createEvidence(evidence: CreateEvidenceDTO) {
        return await this.evidenceReposritory.createEvidence(evidence);
    }
    public async updateEvidence(id: string, evidence: UpdateEvidenceDTO) {
        return await this.evidenceReposritory.updateEvidence(id, evidence);
    }
    public async deleteEvidence(id: string) {
        return await this.evidenceReposritory.deleteEvidence(id);
    }
}