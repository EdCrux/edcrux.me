const menu = document.querySelector('.menu-toggler');
const top_nav = document.querySelector('.top-nav');
const nav_links = document.querySelectorAll('.nav-link');


// Menu interaction 

menu.addEventListener('click', (e) => {
  console.log(e.target)
  menu.classList.toggle('open');
  top_nav.classList.toggle('open');
})

Array.from(nav_links).forEach( link => {
  link.addEventListener('click', () => {
    menu.classList.toggle('open');
    top_nav.classList.toggle('open');
  })
});


