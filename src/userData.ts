const userData = {
  userName: 'Wade Warren',
  avatarUrl: '/img/avatar.png'
};
  
  interface User {
    userName: string,
    avatarUrl: string
  }
  
localStorage.setItem('user', JSON.stringify(userData));
localStorage.setItem('favoritesAmount', '5');
  
const getDataFromLocalStorage = (key: string): string => {
  return localStorage.getItem(key);
}

function instanceOfUser(object: any): object is User {
  return 'userName' in object && 'avatarUrl' in object;
}
  
export const getUserData = (): User => {
  const data: unknown = JSON.parse(getDataFromLocalStorage('user'));
  if (instanceOfUser(data)) {
    return data
  } else {
    return {userName: '', avatarUrl: ''};
  }
};  
  
  
export const getFavoritesAmount = (): number => {
  const data: unknown = getDataFromLocalStorage('favoritesAmount');
  return Number(data);
};