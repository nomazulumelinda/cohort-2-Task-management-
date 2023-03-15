const hamburger = document.querySelector('.hamburger');
const navlink = document.querySelector('.nav__link');

hamburger.addEventListener('click',() => {
    navlink.classlist.toggle('hide');
});