import { products } from './data/products.js'

function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    const input = document.querySelector("input");
    const ul = document.getElementById("items")
    input.addEventListener("keydown", filterItemsHandler)
    showItems(items);

    console.log(input);
  }

  const filterItemsHandler = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredData = items.filter((item) => item.keywords.toLowerCase().includes(value));
    showItems(filteredData);
    console.log(value);
  }

  const showItems = (items) => {
    const listItem = document.getElementById("items");
    listItem.innerHTML = "";
    function createLi(item) {
      const li = document.createElement("li");
      li.textContent = `ID: ${item.id}, NAME: ${item.name}, KEYWORDS: ${item.keywords}`
      return li;
    }

    items.forEach((item) => {
      const li = createLi(item);
      listItem.appendChild(li);
    })
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}
export { itemList }



const data = products;
const { initialPage, filterItemsHandler, showItems } = itemList(data);
initialPage();


