import * as bcrypt from 'bcrypt'

export const hashGenerator = async (password: string) => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hashSync(password, salt)
  return hash
}

export const compareHash = async (password: string, hash: string) => {
  const compare = await bcrypt.compare(password, hash)
  return compare
}