"use strict";

const hamburgerMenu = document.querySelector(`.hamburger-menu`);
const navMenu = document.querySelector(`.menu`);
const navLanguages = document.querySelectorAll(`.hamburger-languages`);
const activeMenuOption = document.querySelector(`#active-menu`);

console.log(navLanguages);
//Function that will run when you click to open the hamburger menu
function toggleMenu() {
  console.log(`Toggle menu`);

  // Show and hidde menu options when hamburger is clicked
  navMenu.classList.toggle(`hamburger-menu-open`);
  hamburgerMenu.classList.toggle(`hamburger-icon-open`);
  navLanguages[0].classList.toggle(`hidden-languages`);
  navLanguages[1].classList.toggle(`hidden-languages`);

  //active menu option style
  //activeMenuOption.classList.toggle(`active-menu`);
  activeMenuOption.classList.toggle(`active-hamburger-menu`);
}

//Add event listener that call the open menu function
hamburgerMenu.addEventListener(`click`, toggleMenu);

console.log(hamburgerMenu);

//When media query changes, hamburger menu options is hidden again
function checkScreenSize() {
  if (window.innerWidth > 820) {
    navMenu.classList.remove(`hamburger-menu-open`);
    hamburgerMenu.classList.remove(`hamburger-icon-open`);
    activeMenuOption.classList.remove(`active-hamburger-menu`);
    navLanguages[0].classList.add(`hidden-languages`);
    navLanguages[1].classList.add(`hidden-languages`);
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
const hambLanguageSelect = document.getElementById("hamburgerLanguageSelect");

//const with the content that will be changed
const headerContent = {
  en: '<h1>Hi! I\'m <span class="myname">Leticia</span></h1><h4>A creative frontend developer and UX/UI designer.</h4>',
  pt: '<h1>Oi! <span class="small-h1">Eu sou a </span><span class="myname">Leticia</span></h1><h4>Uma desenvolvedora frontend criativa e designer UX/UI.</h4>',
};

const aboutContent = {
  en: "<p>I'm a multi-disciplinary designer and front-end developer specializing in user experience and user interface design. With a background in graphic design and architecture, I bring a unique perspective to my work in technology. My endless curiosity and passion for innovation drive me to help businesses connect with their clients through visually appealing and user-friendly designs.<br /><br />My goal is to make a positive impact globally by being part of a diverse team that leverages technology for a better future. Currently studying coding, I'm excited to continue expanding my skills and making a difference through my work.</p>",
  pt: "<h2>Sobre</h2><p> Eu sou uma designer multi-disciplinar e desenvolvedora front-end especializada em design de experiência do usuário e interface do usuário. Com experiência em design gráfico e arquitetura, trago uma perspectiva única para o meu trabalho em tecnologia. Minha curiosidade infinita e paixão por inovação me impulsionam a ajudar empresas a se conectarem com seus clientes por meio de designs visualmente atraentes e amigáveis ao usuário.<br /><br /> Meu objetivo é causar um impacto positivo globalmente fazendo parte de uma equipe diversificada que alavanca a tecnologia para um futuro melhor. Atualmente estudando programação, estou animada para continuar expandindo minhas habilidades e fazendo a diferença por meio do meu trabalho. </p>",
};

//Function for the content change
function updateContent(selectedLanguage) {
  const headerElement = document.getElementById("header-text");
  const aboutElement = document.getElementById("about");

  headerElement.innerHTML = headerContent[selectedLanguage];
  aboutElement.innerHTML = aboutContent[selectedLanguage];
}

//Event that triggers the select button change to call the function ^
languageSelect.addEventListener("change", function () {
  const selectedLanguage = languageSelect.value;
  updateContent(selectedLanguage);

  // set the same value for the other select button
  hambLanguageSelect.value = selectedLanguage;
});

//Event that triggers the language change on the hamburger menu
hambLanguageSelect.addEventListener("change", function () {
  const selectedLanguage = hambLanguageSelect.value;
  updateContent(selectedLanguage);

  // set the same value for the other select button
  languageSelect.value = selectedLanguage;
});
