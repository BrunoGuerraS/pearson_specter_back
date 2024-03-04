import * as multer from "multer";
import * as path from "path";
import * as uuid4 from "uuid4";

const destinationPath = path.join(__dirname, "../upload");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    const uuidFile = uuid4();
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const formattedDate = `${date.getFullYear()}_${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}_${date.getDate().toString().padStart(2, "0")}`;
    const extArray = file.mimetype.split("/");
    const extension = extArray[extArray.length - 1];
    cb(
      null,
      file.originalname.split(".")[0] +
        "-" +
        formattedDate +
        "-" +
        uuidFile +
        "." +
        extension
    );
  },
});


const MemoryStorage = {}

const fileReader = multer({ storage: storage }).fields([{ name: "evidence" }]);

export default fileReader;
