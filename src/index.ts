import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData } from './userData.js'
import { getFavoritesAmount } from './userData.js'
import { searchHandler } from './searchData.js'
import { getTodosByCount } from './todo.js'

window.addEventListener('DOMContentLoaded', (): void => {
  renderUserBlock(
    getUserData().userName,
    getUserData().avatarUrl,
    getFavoritesAmount()
  )
  renderSearchFormBlock()
  renderSearchStubBlock()
  searchHandler()
  getTodosByCount(10)
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
