import { IEvidence } from "../Interfaces/evidence.interface";

export type UpdateEvidenceDTO = Partial<Omit<IEvidence, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>>;