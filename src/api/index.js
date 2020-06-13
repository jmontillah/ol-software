import { data } from './data';

let { users, roles } = data;
const users_ = data.users;

export const login = (email, pass) => {
  const found = users.find(user => (
    user.email === email && user.password === pass
  ));
  return found;
}

export const getUsers = () => {
  const finalArr = [];
  for (const user of users) {
    let role = roles.find(rol => rol._id === user.role);
    if (role) user.role = role;
    if (finalArr.length !== users.length) finalArr.push(user);
  }
  return finalArr;
}

export const getUser = userId => {
  const userToReturn = JSON.parse(
    JSON.stringify(
      [...users].find(us => us._id === userId)
    )
  );
  userToReturn.role = userToReturn.role._id;
  return userToReturn;
}

export const updateUser = userObj => {
  let index = users.findIndex(us => us._id === userObj._id);
  users[index] = userObj;
}

export const deleteUser = userId => {
  users = users.filter(user => user._id !== userId);
}

export const filterUsers = objFilters => {
  let obj = {};
  users = users_;
  for (const ele in objFilters) {
    if (objFilters.hasOwnProperty(ele)) {
      const element = String(objFilters[ele]).toLowerCase();
      obj[ele] = element;
    }
  }
  const { names, surnames, national_id, role, active, phone, email } = obj;
  const finalArr = users.filter(user => 
    (user.names.toLowerCase() === names || names === '') &&
    (user.surnames.toLowerCase() === surnames || surnames === '') &&
    (user.national_id === national_id || national_id === '') &&
    (user.role._id === role || role === '') &&
    (String(user.active) === active || active === '') &&
    (user.phone === phone || phone === '') &&
    (user.email.toLowerCase() === email || email === '')
  );
  users = finalArr;
}

export const createUser = userObj => {
  let _id = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < 24; i++) {
    _id += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  userObj._id = _id;
  users.push(userObj);
}

export const getRoles = () => {
  return roles;
}