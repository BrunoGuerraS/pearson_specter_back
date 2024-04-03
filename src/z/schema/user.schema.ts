import { z } from 'zod'

const username = z.string().min(1).max(255)
const name = z.string().min(1).max(255)
const last_name = z.string().min(1).max(255)
const email = z.string().email()
const password = z.string().min(6).max(255)
// const role = z.enum(['admin', 'user'])

export const createUserSchema = z.object({
  username,
  name,
  last_name,
  email,
  password,
})