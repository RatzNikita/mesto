import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const name = document.querySelector('.profile__title')
const description = document.querySelector('.profile__subtitle')
const cardContainer = document.querySelector('.elements-list')
const editPopup = document.querySelector('.popup_type_edit')
const editBtn = document.querySelector('.profile__edit-button')
const editPopupInputForm = editPopup.querySelector('.popup__form')
const profileName = editPopup.querySelector('.popup__input_type_name')
const profileDesc = editPopup.querySelector('.popup__input_type_description')
const addBtn = document.querySelector('.profile__add-button')
const addPopup = document.querySelector('.popup_type_add')
const popupInputForm = addPopup.querySelector('.popup__form')
const cardName = addPopup.querySelector('.popup__input_type_name')
const cardImg = addPopup.querySelector('.popup__input_type_description')
const popupCloseButtons = document.querySelectorAll('.popup__close-btn')
const popups = document.querySelectorAll('.popup')
const cardFormElement = document.getElementById('card-form')
const profileFormElement = document.getElementById('profile-form')

const selectors = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const createCard = (title, image) => {
    return new Card('#element-template', title, image).generateCard();
}

const hidePopupOnEscapeKeydown = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        hidePopup(openedPopup)
    }
}

export const openPopup = (popup) => {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', hidePopupOnEscapeKeydown)

}

const hidePopup = (popup) => {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', hidePopupOnEscapeKeydown)
}

initialCards.forEach(e => {
    const card = createCard(e.name, e.link)
    cardContainer.append(card)
})

addBtn.addEventListener('click', () => {
    newCardValidation.resetValidation();
    openPopup(addPopup)

})

popupInputForm.addEventListener('submit', evt => {
    evt.preventDefault()
    const card = createCard(cardName.value, cardImg.value)
    cardContainer.prepend(card)
    cardName.value = ''
    cardImg.value = ''
    hidePopup(addPopup)

})

editBtn.addEventListener('click', () => {
    profileName.value = name.textContent
    profileDesc.value = description.textContent
    profileValidation.resetValidation();
    openPopup(editPopup)
})

editPopupInputForm.addEventListener('submit', evt => {
    evt.preventDefault()
    name.textContent = profileName.value
    description.textContent = profileDesc.value
    hidePopup(editPopup)

})

popupCloseButtons.forEach(button => {
    const popup = button.closest('.popup')
    button.addEventListener('click', () => hidePopup(popup))
})


popups.forEach(popupElement => {
    popupElement.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            hidePopup(popupElement)
        }
    })
})


const profileValidation = new FormValidator(selectors, profileFormElement);
const newCardValidation = new FormValidator(selectors, cardFormElement);
profileValidation.enableValidation();
newCardValidation.enableValidation();












