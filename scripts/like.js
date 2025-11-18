/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

document.addEventListener('DOMContentLoaded', function() {
  const likeHeartArray = document.querySelectorAll('.like-icon');
  const likeButtonArray = document.querySelectorAll('.card__like-button');
  const iconButtonArray = document.querySelectorAll('.card__icon-button');

  
  iconButtonArray.forEach(function(iconButton, index) {
    if (likeHeartArray[index]) {
      iconButton.onclick = function() {
        toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
      };
    }
  });

  likeButtonArray.forEach(function(button, index) {
    if (likeHeartArray[index]) {
      button.onclick = function() {
        toggleIsLiked(likeHeartArray[index], button);
      };
    }
  });

  function toggleIsLiked(heart, button) {
    heart.classList.toggle('is-liked');
    setButtonText(heart, button);
  }

  function setButtonText(heart, button) {
    if (!button || !button.querySelector('.button__text')) {
      return;
    }
    
    if (heart.classList.contains('is-liked')) {
      setTimeout(function() {
        const textElement = button.querySelector('.button__text');
        if (textElement) {
          textElement.textContent = 'Unlike';
        }
      }, 500);
    } else {
      setTimeout(function() {
        const textElement = button.querySelector('.button__text');
        if (textElement) {
          textElement.textContent = 'Like';
        }
      }, 500);
    }
  }
});
