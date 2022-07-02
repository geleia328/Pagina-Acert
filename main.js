// DOM DOCUMENT OBJECT MODEL
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder todo o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o header da pagina quando der scroll */

const header = document.querySelector('header')
const navHeight = header.offsetHeight

/*sombra do menu aparece na rolagem */
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    /*Scroll é maior que a altura do header*/
    header.classList.add('scroll')
  } else {
    //menuor que a altura do header
    header.classList.remove('scroll')
  }
})

//TESTEMUNHOS COROUSEL SLIDER SWIPER//
const swiper = new Swiper('.swiper-container', {
  slidePerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },

  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*SCROLLREVEAL MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PAGINA*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .cards,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links, .brand, footer .social
  `,
  { interval: 100 }
)

/* Function menu*/
const sections = document.querySelectorAll('main section[id]')
function activeMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
