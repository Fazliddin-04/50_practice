const navigationCircle = document.querySelector('.navigation-circle');
const contentContainer = document.querySelector('.container');
const menu = document.querySelector('#menu');

navigationCircle.addEventListener("click", () => {
    navigationCircle.classList.toggle('active')
    contentContainer.classList.toggle('active')
    menu.classList.toggle('active')
})