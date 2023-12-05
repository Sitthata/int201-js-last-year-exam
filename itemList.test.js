const products = require('./data/products.js')
const itemList = require('./itemList.js')

const fs = require('fs')
const initialHtml = fs.readFileSync('./index.html')
window.document.body.innerHTML = initialHtml

beforeEach(() => {
  window.document.body.innerHTML = initialHtml
  jest.resetModules()
})
const randomKeywords = ['waze', 'happy', 'WINDOW', 'Droid', '17']
// const getRandomIndex = () => Math.floor(Math.random() * 6)
// const testSearchValue = randomKeywords[getRandomIndex()]

const { initialPage, filterItemsHandler, showItems } = itemList(products)

test('initialPage (show all items)', () => {
  initialPage()
  const itemsUl = document.getElementById('items')
  expect(itemsUl.children).toHaveLength(products.length)
  for (let i = 0; i < itemsUl.children.length; i++) {
    const item = itemsUl.children[i]
    expect(item.nodeName).toBe('LI')
    expect(item.textContent).toBe(
      `ID:${products[i].id}, NAME:${products[i].name}, KEYWORDS:${products[i].keywords}`
    )
  }
})

test('showItem (default page)', () => {
  showItems(products)
  const itemsUl = document.getElementById('items')
  expect(itemsUl.children).toHaveLength(products.length)
  for (let i = 0; i < itemsUl.children.length; i++) {
    const item = itemsUl.children[i]
    expect(item.nodeName).toBe('LI')
    expect(item.textContent).toBe(
      `ID:${products[i].id}, NAME:${products[i].name}, KEYWORDS:${products[i].keywords}`
    )
  }
})

test('filterItemsHandler', () => {
  const itemsUl = document.getElementById('items')
  const userKeywords = document.querySelector('input')
  userKeywords.addEventListener('input', filterItemsHandler)

  randomKeywords.forEach((keyword) => {
    const event = new Event('input')
    userKeywords.value = keyword
    userKeywords.dispatchEvent(event)

    const filteredItems = products.filter((product) =>
      product.keywords.toLowerCase().includes(keyword.toLowerCase())
    )

    expect(itemsUl.children.length).toBe(filteredItems.length)

    for (let i = 0; i < itemsUl.children.length; i++) {
      const item = itemsUl.children[i]
      expect(item.nodeName).toBe('LI')
      expect(item.textContent).toBe(
        `ID:${filteredItems[i].id}, NAME:${filteredItems[i].name}, KEYWORDS:${filteredItems[i].keywords}`
      )
    }
  })
})

test('showItems (only contain user keywords)', () => {
  const itemsUl = document.getElementById('items')
  randomKeywords.forEach((keyword) => {
    const filteredItems = products.filter((product) =>
      product.keywords.toLowerCase().includes(keyword.toLowerCase())
    )
    showItems(filteredItems)
    expect(itemsUl.children.length).toBe(filteredItems.length)

    for (let i = 0; i < itemsUl.children.length; i++) {
      const item = itemsUl.children[i]
      expect(item.nodeName).toBe('LI')
      expect(item.textContent).toBe(
        `ID:${filteredItems[i].id}, NAME:${filteredItems[i].name}, KEYWORDS:${filteredItems[i].keywords}`
      )
    }
  })
})
