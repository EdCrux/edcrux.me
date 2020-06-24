
/*
$(document).ready(function () {
  $('.menu-toggler').on('click', function () {
    console.log($(this));
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.nav-link').on('click', ()=> {
    $('.menu-toggler').toggleClass('open');
    $('.top-nav').toggleClass('open');
  })
});
*/

const menu = document.querySelector('.menu-toggler');
const top_nav = document.querySelector('.top-nav');
const nav_link = document.querySelector('.nav-link');

menu.addEventListener('click', ()=> {
  menu.classList.toggle('open');
  top_nav.classList.toggle('open');
});

nav_link.addEventListener('click', () => {
  menu.classList.toggle('open');
  top_nav.classList.toggle('open');
})

