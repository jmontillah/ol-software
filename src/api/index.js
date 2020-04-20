import { data } from './data'

export const login = (email, pass) => {
  const { users } = data
  const found = users.find(user => user.email === email && user.password === pass)
  return found
}

export const getUsers = () => {
  const { users, roles } = data
  const finalArr = []
  users.map(user => {
    const role = roles.find(rol => rol._id === user.role)
    user.role = role
    finalArr.push(user)
  })
  return finalArr
}