import { data } from './data'

let { users, roles } = data

export const login = (email, pass) => {
  const found = users.find(user => user.email === email && user.password === pass)
  return found
}

export const getUsers = () => {
  const finalArr = []
  for (const user of users) {
    let role = roles.find(rol => rol._id === user.role)
    if (role) user.role = role
    if (finalArr.length !== users.length) finalArr.push(user)
  }
  return finalArr
}

export const deleteUser = userId => {
  users = users.filter(user => user._id !== userId)
}