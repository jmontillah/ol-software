import { data } from './data'

export const login = (email, pass) => {
  const { users } = data
  const found = users.find(user => user.email === email && user.password === pass)
  return found
}

export const getUsers = () => {
  const { users, roles } = data
  const finalArr = []
  for (const user of users) {
    let role = roles.find(rol => rol._id === user.role)
    if (role) user.role = role
    if (finalArr.length !== users.length) finalArr.push(user)
  }
  return finalArr
}