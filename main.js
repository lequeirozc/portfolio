'use strict';

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

window.addEventListener('resize', checkScreenSize);

//////////////////////////////////////////
//Language switch content
const content = {
  en: {
    about: 'About',
    projects: 'Projects',
    contact: 'Get in touch',
    header01: "Hi! I'm ",
    header02: 'A creative frontend developer and UX/UI designer.',
    section01: 'About',
    paragraph01:
      "I'm a multi-disciplinary designer and front-end developer specializing in user experience and user interface design. With a background in graphic design and architecture, I bring a unique perspective to my work in technology. My endless curiosity and passion for innovation drive me to help businesses connect with their clients through visually appealing and user-friendly designs.",
    paragraph02:
      "My goal is to make a positive impact globally by being part of a diverse team that leverages technology for a better future. Currently studying coding, I'm excited to continue expanding my skills and making a difference through my work.",
    subsection01: 'My Skills',
    button01: 'Get to know more about me and my experiences',
    section02: 'Projects',
    button02: 'View more',
    phrasePart01: "Let's design something",
    phrasePart02: 'incredible',
    phrasePart03: 'together.',
    footer: 'All rights reserved',
  },
  pt: {
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
    header01: 'Oi! Eu sou a ',
    header02: 'Uma desenvolvedora frontend criativa e designer UX/UI.',
    section01: 'Sobre',
    paragraph01:
      'Eu sou uma designer multi-disciplinar e desenvolvedora front-end especializada em design de experiência do usuário e interface do usuário. Com experiência em design gráfico e arquitetura, trago uma perspectiva única para o meu trabalho em tecnologia. Minha curiosidade infinita e paixão por inovação me impulsionam a ajudar empresas a se conectarem com seus clientes por meio de designs visualmente atraentes e amigáveis ao usuário.',
    paragraph02:
      'Meu objetivo é causar um impacto positivo globalmente fazendo parte de uma equipe diversificada que alavanca a tecnologia para um futuro melhor. Atualmente estudando programação, estou animada para continuar expandindo minhas habilidades e fazendo a diferença por meio do meu trabalho.',
    subsection01: 'Habilidades',
    button01: 'Saiba mais sobre minhas experiências',
    section02: 'Projetos',
    button02: 'Ver mais',
    phrasePart01: 'Vamos criar algo',
    phrasePart02: 'incrível',
    phrasePart03: 'juntos!',
    footer: 'Todos os direitos reservados',
  },
};

//function that changes the language
function updateContent(selectedLanguage) {
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    element.textContent = content[selectedLanguage][key];
  });
}

//Select buttons
const languageSelect = document.getElementById('languageSelect');
const hambLanguageSelect = document.getElementById('hamburgerLanguageSelect');

let selectedLanguage = 'en'; // default language is English

//Event that triggers the language change function on both the normal nav and hamburger menu
languageSelect.addEventListener('change', function () {
  selectedLanguage = this.value;
  updateContent(selectedLanguage);
  // set the same value for the other select button
  hambLanguageSelect.value = selectedLanguage;
});

hambLanguageSelect.addEventListener('change', function () {
  selectedLanguage = this.value;
  updateContent(selectedLanguage);
  // set the same value for the other select button
  languageSelect.value = selectedLanguage;
});
