import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData } from './userData.js'
import { getFavoritesAmount } from './userData.js'
import { searchHandler } from './searchData.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(
    getUserData().userName,
    getUserData().avatarUrl,
    getFavoritesAmount()
  )
  renderSearchFormBlock()
  renderSearchStubBlock()
  searchHandler()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
