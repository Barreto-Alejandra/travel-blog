/////// Polyfill
import './polyfills/polyfill';

//////////////////////////
// IMPORT CSS
//////////////////////////

/////// LIBRARIES CSS
import 'bootstrap/dist/css/bootstrap-grid.css';
/////// MAIN CSS
import '../css/style.sass';


//////////////////////////
// IMPORT LIBRARIES JS
//////////////////////////

  // import Swiper JS
  import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/swiper-bundle.css';





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

////////////////////
// Run apps
////////////////////
document.addEventListener('DOMContentLoaded', function () {
  var togglerHeader = new Header;
  var parallax = new Parallax;
});




