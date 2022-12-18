const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')
let result = [];
for (const ingredient of ingredients) {
  const li = document.createElement("li")
  li.textContent = ingredient
  li.classList.toggle("item")
   result.push(li)    
}
 ul.append(...result)
console.dir(ul)