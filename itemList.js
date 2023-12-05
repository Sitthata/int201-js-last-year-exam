import { products } from './data/products.js'

function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    const inputItem = document.querySelector('input')
    inputItem.addEventListener('keydown', filterItemsHandler)
    showItems(items)
    console.log(inputItem)
  }

  const filterItemsHandler = (event) => {
    const inputI = document.querySelector('input')
    const aryFind = items.filter((e) => e.keywords.toLowerCase().includes((`${inputI.value}`).toLowerCase()))
    showItems(aryFind)
  }

  const showItems = (items) => {
    const aryRecieve = items
    const ulParent = document.getElementById('items')
    ulParent.textContent = ''
    for (let i = 0; i < aryRecieve.length; i++) {
      const liItem = document.createElement('li')
      liItem.textContent = `ID:${aryRecieve[i].id}, NAME:${aryRecieve[i].name}, KEYWORDS:${aryRecieve[i].keywords}`
      ulParent.appendChild(liItem)
    }
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}
export { itemList }
const { initialPage, filterItemsHandler, showItems } = itemList(products)
initialPage()

