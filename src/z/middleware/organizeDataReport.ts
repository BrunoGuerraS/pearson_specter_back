import { NextFunction, Request, Response } from "express";
import * as path from "path";
// interface MulterFiles {
//   evidence?: Express.Multer.File[];
// }
interface CustomRequest extends Request {
  pasrseData?: any;
}
export const organizeDataReport = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const clientId = () => Math.floor(1000 + Math.random() * 9000);
  const body = req.body;
  const files = req.files as
    | { [fieldname: string]: Express.Multer.File[] }
    | Express.Multer.File[];
  const listNameFiles =
    "evidence" in files ? files.evidence.map((file) => file.filename) : [];
  req.pasrseData = { id_client: clientId(), evidence: listNameFiles, ...body };
  req.pasrseData.person_involved = JSON.parse(req.pasrseData.person_involved);
  req.pasrseData.place = JSON.parse(req.pasrseData.place);
  req.pasrseData.type_report = parseInt(req.pasrseData.type_report);
  req.pasrseData.status = 1
  if (req.pasrseData.evidence.length > 0) {
    req.pasrseData.evidence = req.pasrseData.evidence.map((ev: string) => {
      return {
        file_name: ev,
        path: path.join(__dirname, "../upload/" + ev),
      };
    });
  }
  console.log("report that =", req.pasrseData);
  next();
};
