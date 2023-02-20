"use strict";

const hamburgerMenu = document.querySelector(`.hamburger-menu`);
const navMenu = document.querySelector(`.nav-menu`);

//Function that will run when you click to open the hamburger menu
function toggleMenu() {
  console.log(`Toggle menu`);
  // Show and hidde menu options when hamburger is clicked
  navMenu.classList.toggle(`hamburger-menu-open`);
  hamburgerMenu.classList.toggle(`hamburger-open`);
}

//Add event listener that call the open menu function
hamburgerMenu.addEventListener(`click`, toggleMenu);

console.log(hamburgerMenu);
