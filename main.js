"use strict";

const hamburgerMenu = document.querySelector(`.hamburger-menu`);
const navMenu = document.querySelector(`.menu`);
const navLanguages = document.querySelector(`.languages`);
const activeMenuOption = document.querySelector(`#active-menu`);

//Function that will run when you click to open the hamburger menu
function toggleMenu() {
  console.log(`Toggle menu`);

  // Show and hidde menu options when hamburger is clicked
  navMenu.classList.toggle(`hamburger-menu-open`);
  //navLanguages.classList.toggle(`hamburger-menu-open`);
  hamburgerMenu.classList.toggle(`hamburger-icon-open`);

  //active menu option style
  activeMenuOption.classList.toggle(`active-menu`);
  activeMenuOption.classList.toggle(`active-hamburger-menu`);
}

//Add event listener that call the open menu function
hamburgerMenu.addEventListener(`click`, toggleMenu);

console.log(hamburgerMenu);

function checkScreenSize() {
  if (window.innerWidth > 820) {
    navMenu.classList.remove(`hamburger-menu-open`);
    navLanguages.classList.remove(`hamburger-menu-open`);
    hamburgerMenu.classList.remove(`hamburger-icon-open`);
  }
}

window.addEventListener("resize", checkScreenSize);
