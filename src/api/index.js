import { data } from './data'

export const login = (email, pass) => {
  const { users } = data
  const found = users.find(user => user.email === email && user.password === pass)
  return found
}