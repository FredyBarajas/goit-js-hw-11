import axios from 'axios';
const searchWord = document.querySelector('#search-input');
const key = '38213608-ad9783a4d46f018b5b60b3fea';
const gallery = document.querySelector('.gallery');
const urlBase = 'https://pixabay.com/api/';
const btnApply = document.querySelector('button');
btnApply.addEventListener('click', searchImages);

function searchImages(event) {
  event.preventDefault();
  axios
    .get(urlBase, {
      params: {
        key: key,
        q: searchWord.value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(function (response) {
      const images = response.data.hits;
      console.log(images);
      const markup = images
        .map(
          image => `
        <div class="photo-card">
          <img src="${image.webformatURL}" alt="" loading="lazy" />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
            </p>
            <p class="info-item">
              <b>Views</b>
            </p>
            <p class="info-item">
              <b>Comments</b>
            </p>
            <p class="info-item">
              <b>Downloads</b>
            </p>
          </div>
        </div>`
        )
        .join('');
      gallery.innerHTML = markup;
    })

    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
