const openModalBtn = document.querySelector('.menu-icon');
const closeModalButton = document.getElementById('closeModal');
const menuModal = document.getElementById('menuModal');
<<<<<<< Updated upstream
const overalay = document.getElementById('overlay');
=======
const overlay = document.getElementById('overlay');
>>>>>>> Stashed changes

if (openModalBtn && closeModalButton && menuModal) {
  openModalBtn.addEventListener('click', () => {
    menuModal.classList.add('open');
<<<<<<< Updated upstream
    overalay.classList.add('open');
=======
    overlay.classList.add('open');
>>>>>>> Stashed changes
  });

  closeModalButton.addEventListener('click', () => {
    menuModal.classList.remove('open');
<<<<<<< Updated upstream
    overalay.classList.remove('open');
=======
    overlay.classList.remove('open');
>>>>>>> Stashed changes
  });
} else {
  console.error('Ошибка: Один или несколько элементов не найдены.');
}

// const aboutLink = document.querySelector('a[href="#About"]');
// const projectsLink = document.querySelector('a[href="#Projects"]');
// const contactsLink = document.querySelector('a[href="#Contacts"]');

// aboutLink.addEventListener('click', e => {
//   e.preventDefault();
//   document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
//   menuModal.classList.remove('open');
// });

// projectsLink.addEventListener('click', e => {
//   e.preventDefault();
//   document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });
//   menuModal.classList.remove('open');
// });

// contactsLink.addEventListener('click', e => {
//   e.preventDefault();
//   document.getElementById('Contacts').scrollIntoView({ behavior: 'smooth' });
//   menuModal.classList.remove('open');
// });
