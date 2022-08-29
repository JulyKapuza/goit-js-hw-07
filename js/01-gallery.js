import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onContainerGalleryClick)



function createGalleryMarkup(items) {
    
    return items.map(({preview, original, description}) => {
        return `
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    `;
    }).join("");

}


function onContainerGalleryClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains("gallery__image")) {
        return;
    }
    const imageInstance = e.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${imageInstance}">
`)

    instance.show();


    document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        instance.close()
    }
});
};





