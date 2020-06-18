export const checkSession = () => {
  const username = localStorage.getItem('username');
  return username ? username : false;
}

export const loginSession = username => {
  localStorage.setItem('username', username);
}

export const logoutSession = () => {
  localStorage.removeItem('username');
}