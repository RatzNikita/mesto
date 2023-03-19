import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const name = document.querySelector('.profile__title')
const description = document.querySelector('.profile__subtitle')
const cardContainer = document.querySelector('.elements-list')
const cardTemplate = document.querySelector('#element-template').content;
const editPopup = document.querySelector('.popup_type_edit')
const editBtn = document.querySelector('.profile__edit-button')
const editPopupInputForm = editPopup.querySelector('.popup__form')
const profileName = editPopup.querySelector('.popup__input_type_name')
const profileDesc = editPopup.querySelector('.popup__input_type_description')
const addBtn = document.querySelector('.profile__add-button')
const addPopup = document.querySelector('.popup_type_add')
const addPopupInputForm = addPopup.querySelector('.popup__form')
const cardName = addPopup.querySelector('.popup__input_type_name')
const cardImg = addPopup.querySelector('.popup__input_type_description')
const popupCloseButtons = document.querySelectorAll('.popup__close-btn')
const popupContainers = document.querySelectorAll('.popup__container, .popup__image-container')
const popups = document.querySelectorAll('.popup')
const cardFormElement = document.getElementsByName('card-form')[0]
const profileFormElement = document.getElementsByName('profile-form')[0]

const selectors = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'}


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


const hidePopupOnEscapeKeydown = (evt) => {
    const openedPopup = document.querySelector('.popup_opened')
    if (evt.key === 'Escape') {
        hidePopup(openedPopup)
    }
}

export const openPopup = (popup) => {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', hidePopupOnEscapeKeydown)

}

const disableSubmitBtn = (popup) => {
    const popupSubmitBtn = popup.querySelector('.popup__submit-btn')
    popupSubmitBtn.disabled = true;
    popupSubmitBtn.classList.add('popup__submit-btn_disabled')
}

const hidePopup = (popup) => {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown',hidePopupOnEscapeKeydown)
}

initialCards.map(e => {
    const card = new Card(cardTemplate,e.name, e.link)
    cardContainer.append(card.generateCard())
})

addBtn.addEventListener('click', () => {
    openPopup(addPopup)
    disableSubmitBtn(addPopup)
})

addPopupInputForm.addEventListener('submit', evt => {
    evt.preventDefault()
    const card = new Card(cardTemplate,cardName.value, cardImg.value)
    cardContainer.prepend(card.generateCard())
    cardName.value = ''
    cardImg.value = ''
    hidePopup(addPopup)

})

editBtn.addEventListener('click', () => {
    openPopup(editPopup)
    disableSubmitBtn(editPopup)
    profileName.value = name.textContent
    profileDesc.value = description.textContent
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

popupContainers.forEach(e => {
    e.addEventListener('click', evt => {
        evt.stopPropagation()
    })
})

popups.forEach(popupElement => {
    popupElement.addEventListener('click', () => {
        if (popupElement.classList.contains('popup_opened')) {
            hidePopup(popupElement)
        }
    })
})


const validateForm = (formElement) => {
    const formValidator = new FormValidator(selectors,formElement)
    formValidator.enableValidation()
}

validateForm(cardFormElement)
validateForm(profileFormElement)












