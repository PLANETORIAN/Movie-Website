import {movies, series, topRated, trending} from './content.js';

//top carousel
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
  });


let moviesHtml='';

movies.forEach((movie) => {
    moviesHtml += `
    <div class="movie-card-item">
        <img  class="movie-card-item-image"src="${movie.image}" alt="">
        <div class="movie-card-item-detail">
            <span class="movie-card-item-title">${movie.title}</span>
            <p class="movie-card-item-description">${movie.description}
            </p>
            <button class="movie-card-item-download">Watch</button>
            <button class="movie-card-item-like"><i class="fa-regular fa-heart"></i></button>
            </div>
    </div>`
});

document.querySelector('.js-movies').innerHTML = moviesHtml;

let seriesHtml='';
series.forEach((show)=>{
    seriesHtml += `
    <div class="movie-card-item">
        <img  class="movie-card-item-image"src="${show.image}" alt="">
        <div class="movie-card-item-detail">
            <span class="movie-card-item-title">${show.title}</span>
            <p class="movie-card-item-description">${show.description}
            </p>
            <button class="movie-card-item-download">Watch</button>
            <button class="movie-card-item-like"><i class="fa-regular fa-heart"></i></button>
            </div>
    </div>`
})

document.querySelector('.js-series').innerHTML = seriesHtml;

let topRatedHtml='';
topRated.forEach((top)=>{
    topRatedHtml += `
    <div class="movie-card-item">
        <img  class="movie-card-item-image"src="${top.image}" alt="">
        <div class="movie-card-item-detail">
            <span class="movie-card-item-title">${top.title}</span>
            <p class="movie-card-item-description">${top.description}
            </p>
            <button class="movie-card-item-download">Watch</button>
            <button class="movie-card-item-like"><i class="fa-regular fa-heart"></i></button>
            </div>
    </div>`
})

document.querySelector('.js-top-rated').innerHTML = topRatedHtml;


let trendingHtml='';
trending.forEach((trend)=>{
    trendingHtml += `
    <div class="movie-card-item">
        <img  class="movie-card-item-image"src="${trend.image}" alt="">
        <div class="movie-card-item-detail">
            <span class="movie-card-item-title">${trend.title}</span>
            <p class="movie-card-item-description">${trend.description}
            </p>
            <button class="movie-card-item-download">Watch</button>
            <button class="movie-card-item-like"><i class="fa-regular fa-heart"></i></button>
            </div>
    </div>`
})

document.querySelector('.js-trending').innerHTML = trendingHtml;


const arrows = document.querySelectorAll(".arrow");
const movieCards = document.querySelectorAll(".movie-card");

arrows.forEach((arrow,i) => {
    const cardNumber = movieCards[i].querySelectorAll("img").length;
    let click = 0;
    arrow.addEventListener("click", ()=>{
        click++;
        let ratio = Math.floor(window.innerWidth/270);
        if (cardNumber-(4+click) + (4-ratio) >=0) {
            movieCards[i].style.transform = `translateX(${
                movieCards[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
        }
        else {
            movieCards[i].style.transform= 'translateX(0)';
            click = 0;
        }
    });
});

const likeButtons = document.querySelectorAll('.movie-card-item-like, .movie-card-item-like-top');

likeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const heartIcon = this.querySelector('i');
        if (heartIcon.classList.contains('fa-regular')) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
        } else {
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
        }
    });
});

const menu = document.querySelector(".nav");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});

const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", () => {
  menu.classList.remove("open");
});





