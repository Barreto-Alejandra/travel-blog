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

// Library name
// import example from "example";



//////////////////////////
// CLASS BLOCKS
//////////////////////////

// Example
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

////////////////////
// Run apps
////////////////////
document.addEventListener('DOMContentLoaded', function () {
  var togglerHeader = new Header;
});





////////////////////
// Keyboard focus
////////////////////

function keyboardFocus (e) {
  if (e.keyCode === 9) { // Tab key
    document.documentElement.classList.add('keyboard-focus');
  }

  document.removeEventListener('keydown', keyboardFocus, false);
}

document.documentElement.classList.remove('no-js');
document.addEventListener('keydown', keyboardFocus, false);