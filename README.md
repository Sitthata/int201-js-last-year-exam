# LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# test-filter-items project

prepares product data in ./data/product.js as follows:

# itemList Requirement

Given _itemList(userItems)_ function that contains one constant variable and three nested functions to filter for products. You must write three nested functions to work when a user inputs keywords, your item list must change dynamically according to a user’s keyword values.

### Constant Variables:

- **items**: assign userItems parameter to initial items

### Nested Functions:

- **initalPage()** adding _filterItemsHandler()_ function to `<input type="text" />` with event 'input'. Then calling _showItems()_ function to show list of all items as default when firstly loading page.

- **filterItemsHandler()** filtering an array of items that contains user’s keywords with case insensitive. Then calling _showItems()_ function by sending filtered array as parameter.

- **showItems(_items_)** accepting array of items and show them dynamically. You must remove previous ’s item list. Then creating `<li>` elements for each single item under `<ul id="items"></ul>`. Each `<li>` element contains a text content `'ID:product id, NAME:product name, KEYWORDS:product keywords'`
  - for example, `'ID:GGOEAFKA087499, NAME:Android Small Removable  Sticker Sheet', KEYWORDS:Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet'`.
  - Note that there is one white space after comma (,) between ID, NAME, and KEYWORDS.

# Test Structures

- test('output#1: _initialPage (show all items)_')
- test('output#2: _showItem (default page)_')
- test('output#3: _filterItemsHandler_')
- test('output#4: _showItems (only contain user keywords)_')

# Screen Capture Outputs

![initial page](/assets/images/output1.JPG)
![filtering with keyword 'h'](/assets/images/output2.JPG)
![filtering with keyword 'ha'](/assets/images/output3.JPG)
![filtering with keyword 'happy'](/assets/images/output4.JPG)
