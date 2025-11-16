/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}
document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.querySelector('.save-button');
    const okButton = document.querySelector('.ok-button');
    
    if (saveButton) {
        saveButton.addEventListener('click', function(event) {
            event.preventDefault(); 
          
            console.log('Сохранение...');
        });
    }
    
    if (okButton) {
        okButton.addEventListener('click', function(event) {
            event.preventDefault(); 
          
            console.log('OK нажата');
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {

  const saveButton = document.querySelector('.card__save-button');
  const dialog = document.querySelector('dialog');
  const okButton = document.querySelector('.dialog__ok-button');
  

  if (saveButton) {
    saveButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      
      if (dialog) {
        dialog.showModal();
      }
    });
  }
  
  
  if (okButton) {
    okButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      
      if (dialog) {
        dialog.close();
      }
    });
  }
  
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    });
  });
});
