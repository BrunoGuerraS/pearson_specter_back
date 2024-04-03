import { z } from "zod";

const email = z.string().email();
const password = z.string().min(6);

export const loginSchema = z.object({
  email,
  password,
});
