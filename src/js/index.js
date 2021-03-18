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
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';




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




////////////////////
// Run apps
////////////////////
document.addEventListener('DOMContentLoaded', function () {
  var togglerHeader = new Header;
});




