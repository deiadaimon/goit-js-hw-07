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
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const gallery = document.querySelector('.gallery');

// =============== SOLUTION 1: FOR EACH =============== 

// images.forEach(element => {
//   const galleryItem = document.createElement('li');
//   gallery.append(galleryItem);

//   const galleryItemImage = document.createElement('img');
//   galleryItemImage.classList.add('image');
//   galleryItemImage.setAttribute('src', element.url);
//   galleryItemImage.setAttribute('alt', element.alt);
//   galleryItem.append(galleryItemImage);
// });


// =============== SOLUTION 2: MAP ===============

// images.map(element => {
//   const galleryItem = document.createElement('li');
//   gallery.append(galleryItem);

//   const galleryItemImage = document.createElement('img');
//   galleryItemImage.src = element.url;
//   galleryItemImage.alt = element.alt;
//   galleryItem.append(galleryItemImage);
// });


// =============== SOLUTION 3: ШАБЛОННИЙ РЯДОК ===============
  
const galleryMarkup = images
  .map(element => {
  return `<li><img src=${element.url} alt=${element.alt}></li>`;
 })
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

