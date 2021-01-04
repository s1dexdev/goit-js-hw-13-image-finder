import galleryTemplate from './templates/gallery.hbs';
import apiService from './js/apiService.js';
import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import './styles/style.css';

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      createGalleryMarkup();
      observer.disconnect();
    }
  });
});
const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  linkArrow: document.querySelector('.js-arrow'),
};

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  apiService.pageReset();
  apiService.query = event.target.elements.query.value;

  createGalleryMarkup();

  refs.gallery.innerHTML = '';
  refs.form.reset();
});

refs.gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    modalShow(event.target.dataset.source);
  }
});

function createGalleryMarkup() {
  apiService.fetchQuery().then(articles => {
    refs.gallery.insertAdjacentHTML('beforeend', galleryTemplate(articles));

    onObserve();
  });

  refs.linkArrow.classList.remove('hidden');
}

function modalShow(url) {
  const markup = `<img src='${url} alt=''>`;
  const instance = basicLightbox.create(markup);

  instance.show();
}

function onObserve() {
  io.observe(refs.gallery.lastElementChild);
}
