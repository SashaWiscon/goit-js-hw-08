// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);


const container = document.querySelector('.gallery');
const markup = galleryItems.map(
  item => `
   <li class="gallery__item js-target">
     <a class="gallery__link js-target" href="${item.original}">
       <img class="gallery__image js-target" src="${item.preview}" 
        data-source="${item.original}"
        alt="${item.description}">
     </a>
    </li>
`
);

container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener('click', onclick);

function onclick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('js-target')) {
    return;
  }

  

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'top',
    captionDelay: 250,
  });
};
