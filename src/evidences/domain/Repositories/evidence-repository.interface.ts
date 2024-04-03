import { CreateEvidenceDTO } from "../DTO/createEvidence";
import { UpdateEvidenceDTO } from "../DTO/updateEvidence";
import { IEvidence } from "../Interfaces/evidence.interface";

export interface IEvidenceRepository {
    getEvidenceById(id: IEvidence[]): Promise<any>;
    createEvidence(evidence: CreateEvidenceDTO): Promise<any>;
    updateEvidence(id: string, evidence: UpdateEvidenceDTO): Promise<any>;
    deleteEvidence(id: string): Promise<any>;
}