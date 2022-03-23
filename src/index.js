import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// Render App.js on root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// When the user scrolls the page, execute myFunction
window.onscroll = function() {addSticky()};

// Get the toolbar
let toolbar = document.getElementById("toolbar");

// Get the offset position of the toolbar
let sticky = toolbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addSticky() {
  if (window.pageYOffset > sticky) {
    toolbar.classList.add("sticky");
  } else {
    toolbar.classList.remove("sticky");
  }
}

reportWebVitals();
