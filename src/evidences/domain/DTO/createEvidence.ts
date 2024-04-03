import { IEvidence } from "../Interfaces/evidence.interface";

export type CreateEvidenceDTO = Omit<IEvidence, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;
