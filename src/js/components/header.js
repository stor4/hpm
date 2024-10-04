const burgerMenu = document.querySelector('.header__burger-menu')
const burgerBtn = document.querySelector('.header__burger-btn')

burgerBtn.addEventListener('click', function() {
  burgerMenu.classList.toggle('burger-open')
  burgerBtn.classList.toggle('burger-btn-open')
})
