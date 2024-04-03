import { NextFunction, Request, Response } from "express";
import { EvidenceApplicationService } from "../../../application/evidence.service";
import { EvidenceRepository } from "../../repository/evidence.repository";

export class EvidenceController {
  private evidenceApplicationService: EvidenceApplicationService;
  constructor(readonly evidenceRepository: EvidenceRepository) {
    this.evidenceApplicationService = new EvidenceApplicationService(
        evidenceRepository
    );
  }
  public async getEvidenceById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
        const evidences = this.evidenceApplicationService.getEvidenceById(req.params.id);
        return res.status(200).json(evidences);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
  }
}
