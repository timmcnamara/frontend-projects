var modal = document.querySelector('#simpleModal');
var modalBtn =  document.querySelector('#modalBtn');
var closeBtn = document.querySelector('.closeBtn');

modalBtn.addEventListener( 'click', openModal)
closeBtn.addEventListener( 'click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
   modal.style.display = 'block';
}

function closeModal() {
   modal.style.display = 'none';
}

function outsideClick(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
