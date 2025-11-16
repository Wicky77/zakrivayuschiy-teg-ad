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
    // Обработчики для лайков
    const likeHeartArray = document.querySelectorAll('.like-icon');
    const likeButtonArray = document.querySelectorAll('.card__like-button');
    const iconButtonArray = document.querySelectorAll('.card__icon-button');

    iconButtonArray.forEach((iconButton, index) => {
        iconButton.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
        });
    });

    likeButtonArray.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            toggleIsLiked(likeHeartArray[index], button);
        });
    });

    function toggleIsLiked(heart, button) {
        heart.classList.toggle('is-liked');
        setButtonText(heart, button);
    }

    function setButtonText(heart, button) {
        if (heart.classList.contains('is-liked')) {
            setTimeout(() => {
                button.querySelector('.button__text').textContent = 'Unlike';
            }, 500);
        } else {
            setTimeout(() => {
                button.querySelector('.button__text').textContent = 'Like';
            }, 500);
        }
    }

    // Обработчики для модального окна
    const saveButton = document.querySelector('.save__button');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.modal__button');
    
    if (saveButton && modal) {
        saveButton.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            modal.showModal();
        });
    }
    
    if (closeButton && modal) {
        closeButton.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            modal.close();
        });
    }

    // Глобальная защита от перезагрузки для всех кнопок
    document.addEventListener('click', function(event) {
        const button = event.target.closest('button');
        if (button && button.type === 'button') {
            event.preventDefault();
        }
    });
});
