const menu_toggler = document.querySelector('.menu-toggler');
const top_nav = document.querySelector('.top-nav');
const nav_link = document.querySelectorAll('.nav-link');


menu_toggler.addEventListener('click', () => {
  menu_toggler.classList.toggle('open');
  top_nav.classList.toggle('open');
})


nav_link.forEach( link => {
  link.addEventListener('click', () => {
    menu_toggler.classList.toggle('open');
    top_nav.classList.toggle('open');
  })
})


