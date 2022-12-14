const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const photoGallery = document.querySelector('.gallery');
// photoGallery.style.listStyle = "none";
// const markImg = ((images) => {
//   return images.map((image) => {
//     const markImgEl = document.createElement("li");
//     markImgEl.insertAdjacentHTML("beforeend", "<img>");
//     markImgEl.firstChild.src = image.url;
//     markImgEl.firstChild.alt = image.alt;
//     markImgEl.firstChild.style.width = "370px"
//     return markImgEl;
//   });  
// });
// const img = markImg(images);
// photoGallery.append(...img);

const galleryList = document.querySelector(".gallery");
galleryList.style.listStyle = "none";
const elements = images
  .map(
    ({ url, alt }) =>
      `<li><img class='image' src='${url}' alt='${alt}' width='300'></li>`
  )
  .join("");
console.log(elements);
galleryList.insertAdjacentHTML("beforeend", elements);

