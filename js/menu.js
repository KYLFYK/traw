let menu = document.querySelector('.menu__block');
let buttonMenu = document.querySelector('.navigation__block');
let body = document.querySelector('.body');
let humb = document.querySelector('.navigation__humb');


buttonMenu.addEventListener('click', function() {
    if (menu.classList.contains('hidden')) {
        buttonMenu.style.color = '#222222';
        body.style.color = '#222222';
        humb.style.borderColor = '#222222';
        menu.classList.remove('hidden');
    } else {
        buttonMenu.style.color = 'white';
        body.style.color = 'white';
        menu.classList.add('hidden');
        humb.style.borderColor = 'white';
    }
});