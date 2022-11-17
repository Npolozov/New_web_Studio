const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  lockBody: document.querySelector('body'),
};

console.log(refs.closeModalBtn);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

const openBtnClick = () => {
  toggleModal();
  document.addEventListener('keydown', keyBoardPress);
  refs.lockBody.classList.toggle('lock');
};

const closeBtnClick = () => {
  toggleModal();
  document.removeEventListener('keydown', keyBoardPress);
  refs.lockBody.classList.toggle('lock');
};

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeBtnClick();
  }
}

function keyBoardPress(event) {
  if (event.key === 'Escape') {
    closeBtnClick();
  }
}

refs.openModalBtn.addEventListener('click', openBtnClick);
refs.closeModalBtn.addEventListener('click', closeBtnClick);
refs.modal.addEventListener('click', onBackdropClick);
