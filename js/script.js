container = document.querySelector('.container')

const open = document.getElementById('open')
const close = document.getElementById('close')

open.addEventListener('click', () => {
  container.classList.add('container__show-nav')
})
