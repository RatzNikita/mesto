import '../pages/index.css'


import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js"
import PopupWithImage from "./PopupWithImage.js"
import UserInfo from "./UserInfo.js"



const editBtn = document.querySelector('.profile__edit-button')
const addBtn = document.querySelector('.profile__add-button')

const cardContainerSelector = '.elements-list'
const editPopupSelector = '.popup_type_edit'
const addPopupSelector = '.popup_type_add'


const cardFormElement = document.getElementById('card-form')
const profileFormElement = document.getElementById('profile-form')

const selectors = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}


const initialCards = [{
    name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
    name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
    name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
    name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];


const userInfo = new UserInfo({
    nameSelector: '.profile__title', descriptionSelector: '.profile__subtitle'
})

const createCard = (title, image) => {
    return new Card('#element-template', title, image, () => {
        imagePopup.open(title, image)
    }).generateCard();
}


const cards = new Section({
    items: initialCards, renderer: (item) => {
        console.log(item)
        const card = createCard(item.name, item.link)
        cards.addItem(card)
    }
}, cardContainerSelector)

const imagePopup = new PopupWithImage('.popup_type_img')
imagePopup.setEventListeners();


const addPopup = new PopupWithForm(addPopupSelector, (evt, inputs) => {
    evt.preventDefault();
    cards.renderer({name: inputs.name, link: inputs.desc})
    addPopup.close()

})
addPopup.setEventListeners()

addBtn.addEventListener('click', () => {
    newCardValidation.resetValidation();

    addPopup.open()
})

const editPopup = new PopupWithForm(editPopupSelector, (evt, inputs) => {
    evt.preventDefault()
    userInfo.setUserInfo(inputs.name, inputs.desc)
    editPopup.close()
});
editPopup.setEventListeners()


editBtn.addEventListener('click', () => {
    profileValidation.resetValidation();
    editPopup.open()
})


const profileValidation = new FormValidator(selectors, profileFormElement);
const newCardValidation = new FormValidator(selectors, cardFormElement);
profileValidation.enableValidation();
newCardValidation.enableValidation();

cards.renderItems();








