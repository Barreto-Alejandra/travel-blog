/////// Polyfill
import './polyfills/polyfill';

//////////////////////////
// IMPORT CSS
//////////////////////////

/////// LIBRARIES CSS
import 'bootstrap/dist/css/bootstrap-grid.css';
/////// MAIN CSS
import '../css/style.sass';
import 'swiper/css/swiper.css';


//////////////////////////
// IMPORT LIBRARIES JS
//////////////////////////

  // import Swiper JS
import Swiper from 'swiper';






//////////////////////////
// CLASS BLOCKS
//////////////////////////

class Header {
  constructor() {
    this.header = document.querySelector('#menu-toggler');
    this.start();
  }
  start() {
    if (this.header) {
      this.header.addEventListener('click', () => {
        toggleBodyClass("menu-active");
      });

      function toggleBodyClass(className) {
        document.body.classList.toggle(className);
      }
    }
  }
}


class Parallax {
  constructor () {
    this.parallaxEffect = document.querySelector('#js-parallax');
    this.start();
  }
  start() {
    
  }
}


class Slider {
  constructor() {
    this.sliderGallery = document.querySelectorAll('.js-slider');
    this.start();
  }
  start() {
    if( this.sliderGallery) {
      let swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 3000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
}


////////////////////
// Run apps
////////////////////
document.addEventListener('DOMContentLoaded', function () {
  var togglerHeader = new Header;
  var parallax = new Parallax;
  var slider = new Slider;
});




