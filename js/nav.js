let ham = document.querySelector('#burger-nav');
let menu = document.querySelector('#first-three');
let links = document.querySelector('#last');

ham.addEventListener('click', function() {
    menu.classList.toggle('mob');
    links.classList.toggle('mob');
});