import './index.css'

import {initialCards, selectors} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import UserInfo from "../components/UserInfo.js"

const editBtn = document.querySelector('.profile__edit-button')
const addBtn = document.querySelector('.profile__add-button')
const cardContainerSelector = '.elements-list'
const editPopupSelector = '.popup_type_edit'
const addPopupSelector = '.popup_type_add'
const cardFormElement = document.getElementById('card-form')
const profileFormElement = document.getElementById('profile-form')

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
        const card = createCard(item.name, item.link)
        cards.addItem(card)
    }
}, cardContainerSelector)

const imagePopup = new PopupWithImage('.popup_type_img')
imagePopup.setEventListeners();

const popupAddCard = new PopupWithForm(addPopupSelector, (evt, inputs) => {
    evt.preventDefault();
    cards.renderer({name: inputs['place-name-input'], link: inputs['img-input']})
    popupAddCard.close()

})
popupAddCard.setEventListeners()

addBtn.addEventListener('click', () => {
    newCardValidation.resetValidation();
    popupAddCard.open()
})

const popupEditProfile = new PopupWithForm(editPopupSelector, (evt, inputs) => {
    evt.preventDefault()
    userInfo.setUserInfo(inputs['name-input'], inputs['description-input'])
    popupEditProfile.close()
});
popupEditProfile.setEventListeners()

editBtn.addEventListener('click', () => {
    profileValidation.resetValidation();
    setPrevValuesOnProfilePopup();
    popupEditProfile.open()
})

const setPrevValuesOnProfilePopup = () => {
    const actualUserInfo = userInfo.getUserInfo();
    const popupNameInput = profileFormElement.querySelector('.popup__input_type_name')
    const popupDescInput = profileFormElement.querySelector('.popup__input_type_description')
    popupNameInput.value = actualUserInfo.name
    popupDescInput.value = actualUserInfo.desc

}

const profileValidation = new FormValidator(selectors, profileFormElement);
const newCardValidation = new FormValidator(selectors, cardFormElement);
profileValidation.enableValidation();
newCardValidation.enableValidation();

cards.renderItems();








