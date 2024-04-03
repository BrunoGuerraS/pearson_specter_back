import { CreateEvidenceDTO } from "../domain/DTO/createEvidence";
import { UpdateEvidenceDTO } from "../domain/DTO/updateEvidence";
import { IEvidenceRepository } from "../domain/Repositories/evidence-repository.interface";
import { EvidenceDomainService } from "../domain/Services/evindence.service";

export class EvidenceApplicationService {
    private evidenceDomainService: EvidenceDomainService;
    constructor(readonly evidenceRepository: IEvidenceRepository){
        this.evidenceDomainService = new EvidenceDomainService(evidenceRepository);
    }
    public async getEvidenceById(id: any) {
        return await this.evidenceDomainService.getEvidenceById(id);
    }
    public async createEvidence(evidence: CreateEvidenceDTO) {
        return await this.evidenceDomainService.createEvidence(evidence);
    }
    public async updateEvidence(id: string, evidence: UpdateEvidenceDTO) {
        return await this.evidenceDomainService.updateEvidence(id, evidence);
    }
    public async deleteEvidence(id: string) {
        return await this.evidenceDomainService.deleteEvidence(id);
    }
}