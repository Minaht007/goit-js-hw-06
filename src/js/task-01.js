
const categori = document.querySelectorAll('#categories > li');
console.log(categori);


const items = document.getElementById('categories').getElementsByClassName('item')
for (const item of items) {
    const title = item.getElementsByTagName('h2')[0].innerText
    const numOfLi = item.getElementsByTagName('li').length;
    console.log('Category:')
    console.log(title + " " + numOfLi)    
}

