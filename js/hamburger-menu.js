'use strict';

{
    window.addEventListener('load', function () {
        const button = document.querySelector('.hamburger-menu__input');
        const menu = document.querySelector('.header-site-menu');
    
        button.addEventListener('click', () => {
            menu.classList.toggle('is-show');
        });
    });
}
