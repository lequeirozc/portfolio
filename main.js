"use strict";

const hamburgerMenu = document.querySelector(`.hamburger-menu`);
const navMenu = document.querySelector(`.menu`);
const navLanguages = document.querySelector(`.hidden-languages`);
const activeMenuOption = document.querySelector(`#active-menu`);

//Function that will run when you click to open the hamburger menu
function toggleMenu() {
  console.log(`Toggle menu`);

  // Show and hidde menu options when hamburger is clicked
  navMenu.classList.toggle(`hamburger-menu-open`);
  //navLanguages.classList.toggle(`hamburger-menu-open`);
  hamburgerMenu.classList.toggle(`hamburger-icon-open`);
  navLanguages.classList.toggle(`.show-languages`);

  //active menu option style
  //activeMenuOption.classList.toggle(`active-menu`);
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
    activeMenuOption.classList.remove(`active-hamburger-menu`);
    navLanguages.classList.remove(`.show-languages`);
  }
}

window.addEventListener("resize", checkScreenSize);

// const portuguese = {
//   header: `<h1>Oi! Eu sou a<span class="myname">Leticia</span></h1>
//   <h4>Uma criativa frontend developer e UX/UI designer.</h4>`,
//   about: `<h2>Sobre</h2>
//   <p>
//   Eu sou uma designer multi-disciplinar e desenvolvedora
//   front-end especializada em design de experiência do usuário
//   e interface do usuário. Com experiência em design gráfico
//   e arquitetura, trago uma perspectiva única para o meu
//   trabalho em tecnologia. Minha curiosidade infinita
//   e paixão por inovação me impulsionam a ajudar empresas
//   a se conectarem com seus clientes por meio de designs
//   visualmente atraentes e amigáveis ao usuário.<br /><br />
//   Meu objetivo é causar um impacto positivo globalmente
//   fazendo parte de uma equipe diversificada que alavanca
//   a tecnologia para um futuro melhor. Atualmente estudando
//   programação, estou animada para continuar expandindo minhas
//   habilidades e fazendo a diferença por meio do meu trabalho.
//   </p>`,
// };

//Const for the select element for the language change
const languageSelect = document.getElementById("languageSelect");
//const with the content that will be changed
const content = {
  en: '<h1>Hi! I\'m <span class="myname">Leticia</span></h1><h4>A creative frontend developer and UX/UI designer.</h4>',
  pt: '<h1>Oi! <span class="small-h1">Eu sou a </span><span class="myname">Leticia</span></h1><h4>Uma desenvolvedora frontend criativa e designer UX/UI.</h4>',
};

//Event that triggers the language change
languageSelect.addEventListener("change", function () {
  var selectedLanguage = languageSelect.value;
  var headerElement = document.getElementById("header-text");

  headerElement.innerHTML = content[selectedLanguage];
});
