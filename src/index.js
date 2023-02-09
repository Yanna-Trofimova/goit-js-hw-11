import Notiflix from 'notiflix';
import BtnLoadMore from './components/loadMoreBtn.js';

// import './sass/index.scss';
import PixApi from './fetch.js';



// API.getPic("dog").then(console.log);

const form = document.getElementById("search-form");
const divContainer = document.querySelector(".gallery");
const btnLoadMore = new BtnLoadMore("#btnLoadMore");


// let queryPage = 1;
// let inputValue = "";

const pixApi = new PixApi();

form.addEventListener("submit", onSubmit);
btnLoadMore.button.addEventListener("click", fetchPix);



function onSubmit(e) {
   
    e.preventDefault();

    const currentForm = e.currentTarget;
     pixApi.searchQuery = currentForm.elements.searchQuery.value.trim();
    inputClear();
    pixApi.resetPage();


    // if (currentForm.length === 0) {
    //     // return  inputClear();
    //     btnLoadMore.classList.add("hidden");
    // }  
    
  pixApi.getPic();
  btnLoadMore.show();
    fetchPix().finnaly(() => currentForm.reset());
        
}



function creatMarkup(data) {
    return data.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
    `
        <div class="photo-card">
        <a class="gallery__link" href="${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" width="400" heigth="500"/>
   </a>
  <div class="info">
    <p class="info-item">
      <b>Likes:<br/>${likes}</b>
    </p>
    <p class="info-item">
      <b>Views:<br/>${views}</b>
    </p>
    <p class="info-item">
      <b>Comments:<br/>${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads:<br/>${downloads}</b>
    </p>
  </div>
</div>
    
    `).join("");
}


function inputClear () {
     divContainer.innerHTML = "";
}

function renderCard(data) {
    const markup = creatMarkup(data);
    // divContainer.innerHTML = markup;

    divContainer.insertAdjacentHTML("beforeend", markup);
}




function fetchPix() {
     btnLoadMore.hide();
    pixApi.getPic()
        .then(({ hits }) => {
            if (hits.length === 0) {
                
              throw new Error(Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again"));
             
            }
            else if (hits.length  < 40) {
  
              throw new Error (Notiflix.Notify.failure("We're sorry, but you've reached the end of search results."));
}
          
            else {
              btnLoadMore.show();
                return renderCard(hits);
                
            }
        })
}