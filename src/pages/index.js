import './index.css'

import {selectors} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import UserInfo from "../components/UserInfo.js"
import Api from "../components/Api.js"
import DeletePopup from "../components/DeletePopup";

const editBtn = document.querySelector('.profile__edit-button')
const addBtn = document.querySelector('.profile__add-button')
const cardContainerSelector = '.elements-list'
const editPopupSelector = '.popup_type_edit'
const addPopupSelector = '.popup_type_add'
const deletePopupSelector = '.popup_type_delete'
const cardFormElement = document.getElementById('card-form')
const profileFormElement = document.getElementById('profile-form')
const popupNameInput = profileFormElement.querySelector('.popup__input_type_name')
const popupDescInput = profileFormElement.querySelector('.popup__input_type_description')

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
    headers: {
        authorization: 'da5e3f1b-5494-4e8a-9664-96fdffad12db',
        'Content-Type': 'application/json'
    }
});

api
    .getInitialCards()
    .then(data => {
        data.forEach(card => {
            cards.addItem(createCard(card.name, card.link, card._id))
        })
    })
    .catch(err => console.log(err))


const cards = new Section({
    items: [], renderer: (item) => {
        const card = createCard(item.name, item.link, item._id)
        cards.addItem(card)
    }
}, cardContainerSelector)


const userInfo = new UserInfo({
    nameSelector: '.profile__title', descriptionSelector: '.profile__subtitle'
})





const imagePopup = new PopupWithImage('.popup_type_img')
imagePopup.setEventListeners();

const deletePopup = new DeletePopup(deletePopupSelector, (evt,id) => {
    api.deleteCard(id).then(data => console.log(data))
    deletePopup.close();
})

const createCard = (title, image, id) => {
    return new Card('#element-template', title, image, () => {
        imagePopup.open(title, image)
    }, deletePopup, id).generateCard();
}


const popupAddCard = new PopupWithForm(addPopupSelector, (evt, inputs) => {
    evt.preventDefault();
    const card = createCard(inputs['place-name-input'], inputs['img-input'])
    cards.addItem(card)
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
    popupNameInput.value = actualUserInfo.name
    popupDescInput.value = actualUserInfo.desc
}

const profileValidation = new FormValidator(selectors, profileFormElement);
const newCardValidation = new FormValidator(selectors, cardFormElement);
profileValidation.enableValidation();
newCardValidation.enableValidation();

cards.renderItems();








