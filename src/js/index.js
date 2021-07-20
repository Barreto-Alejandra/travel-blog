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



/*IMPORT LIBRARIES JS*/


  // import Swiper JS
import Swiper from 'swiper';

import $ from "jquery";

// ES6 import
import simpleParallax from 'simple-parallax-js';




/*CLASS BLOCKS*/

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
    this.parallaxEffect = document.querySelectorAll('#js-parallax');
    this.start();
  }
  start() {
    if(this.parallaxEffect) {
      new simpleParallax(this.parallaxEffect, {
        scale: 1.5
      });
    }
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
        effect: 'fade',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
}

class Scrolling {
  constructor() {
    this.scrollBlock = document.querySelector('.js-scroll a')
    this.start();
  }
  start() {
    if(this.scrollBlock) {
      $(document).ready(function () {
        $('.js-scroll a').on('click', function (e) {
          var target = this.hash,
              $target = $(target);
          
          $('html, body').stop().animate({
            'scrollTop':$target.offset().top-10

          }, 900, 'swing', function () {

          });
        });
      })
    }
  }
}



/*Run apps*/

document.addEventListener('DOMContentLoaded', function () {
  var togglerHeader = new Header;
  // var parallax = new Parallax;
  var slider = new Slider;
  var scrolling = new Scrolling;
});




