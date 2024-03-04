import { z } from "zod";
//this part will manage the validation of the body in the request
const id_cliente = z.string().refine(
  (value) => {
    const id = parseInt(value);
    return !isNaN(id) && id >= 1000 && id <= 10000;
  },
  {
    message:
      "Id client must be a string representation of a number between 1000 and 9999",
  }
);
const date_start = z.string().refine(
  (value) => {
    const date = new Date(value);
    return !isNaN(date.getTime());
  },
  {
    message:
      "date_start - Invalid date format. Please provide a valid date string.",
  }
);
const date_end = z.string().refine(
  (value) => {
    const date = new Date(value);
    return !isNaN(date.getTime());
  },
  {
    message:
      "date_end - Invalid date format. Please provide a valid date string.",
  }
);
const description = z.string();
const answer1 = z.string();
const answer2 = z.string();
const answer3 = z.string();
const answer4 = z.string();
const answer5 = z.string();
const answer6 = z.string();
const answer7 = z.string();
const answer8 = z.string();
const type_report = z.string().refine((value) => {
  console.log("value into the type_report zod ====>", value);
  const parseNumber = parseInt(value);
  return !isNaN(parseNumber) && parseNumber >= 1 && parseNumber <= 17;
});
const status = z.string().refine((value) => {
  const parseNumber = parseInt(value);
  return !isNaN(parseNumber) && parseNumber >= 1 && parseNumber <= 5;
}, {});
export const createReportSchema = z.object({
  date_start,
  date_end,
  description,
  answer1: answer1.optional(),
  answer2: answer2.optional(),
  answer3: answer3.optional(),
  answer4: answer4.optional(),
  answer5: answer5.optional(),
  answer6: answer6.optional(),
  answer7: answer7.optional(),
  answer8: answer8.optional(),
  type_report,
});

export const updateReportSchema = z.object({
  id_cliente,
  status,
});

export const getReportSchema = z.object({
  id_cliente,
});
