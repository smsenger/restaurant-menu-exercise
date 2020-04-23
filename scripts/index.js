// Write a function (named `getCategories()`) that returns an array of the category names from the 
//`menu` variable.
// (Hint: use the `Object.keys()` function!)
function getCategories(menu) {
   return Object.keys(menu); 
                                    //use Object.keys() to run through menu and get keys, return                                           
}  




// Write a function (named `nameToListItem()`) that accepts a category name (like `"breakfast"`) 
// and returns a new `<li>` DOM element with the category name set as its `.textContent`
// Make sure to `return` the new element.
function nameToListItem(categoryName) {
    const listItem = document.createElement("li");          //take the category name and make it an li
    listItem.textContent = categoryName;                      //category name is its .textContent
    return listItem;  
}  


// Write a function that transforms an array of category names to an array of `<li>` elements.
// Create a new function (named `categoriesToListItem()`). It should expect to receive an array of strings.
// It should use your `nameToListItem()` function to do the transformation.

function categoriesToListItems(arrayOfStrings) {
    const arrayOfListItems = [];
    arrayOfStrings.forEach(function(string) {
        const listItem = nameToListItem(string);
        arrayOfListItems.push(listItem);
    }); return arrayOfListItems;
}
                                                                // for(let i = 0; i < arrOfStrings.length; i++) {
 function categoriesToListItems(arrayOfStrings) {               // const listItem = nameToListItem(arrOfStrings[i]);
    return arrayOfStrings.map(nameToListItem);                  // arrOfListItems.push(listItem);
 }                                                              // }
                                                                // return arrOfListItems



// Use `getCategories()` in combination with `categoriesToListItem()`
// Call your `getCategories()` function to extract the name of the categories.
// Take the result and pass it to the `categoriesToListItem()` function. 
const categories = getCategories(menu);
const categoryListItems = categoriesToListItems(categories);
categoryListItems.forEach(appendToMenu);       


// Render the list items to `.js-menu`
// Write a function that can append a single `<li>` to the `.js-menu` element.
function appendToMenu(listItem) {                                           //accomplishes same as fn above:
    const jsMenu = document.querySelector('.js-menu');                      // function categoriesToListItems2 (arrOfStrings) {
    jsMenu.appendChild(listItem);                                           //return arrOfStrings.map(nameToListItem);
}                                                                           // }

                                                                // Apply that function to your array of `<li>` elements using `.map`
                                                                // arrOfListItems.map(appendToMenu(listItem));




// Add a click handler to each of the `<li>` elements
// - First, do nothing but `console.log()` the category name (i.e., the text between the opening and closing tag)
// - Make sure to add the click handler to the elements *before* you `.appendChild` them

const listElements = document.querySelectorAll('li');
console.log(listElements);

function handleClick(event) {
    console.log(event.target.textContent);
}

listElements.forEach(function (listItem) {
    listItem.addEventListener("click", handleClick); 
}
);




// function addClickHandler(arrayOfElements) {
//     arrayOfElements.forEach(function(element) {
//         element.addEventListener("click", handleClick);
//     });
// }
// addClickHandler(arrayOfListItems);















