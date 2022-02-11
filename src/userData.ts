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
  
const getDataFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
}
  
export const getUserData = () => {
  const data: unknown = JSON.parse(getDataFromLocalStorage('user'));
    
  return data as User;
};
  
export const getFavoritesAmount = () => {
  const data: unknown = getDataFromLocalStorage('favoritesAmount');
  return Number(data);
};