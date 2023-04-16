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
const avatarBtn = document.querySelector('.profile__update-avatar-button')
const cardContainerSelector = '.elements-list'
const editPopupSelector = '.popup_type_edit'
const addPopupSelector = '.popup_type_add'
const deletePopupSelector = '.popup_type_delete'
const avatarPopupSelector = '.popup_type_avatar'
const cardFormElement = document.getElementById('card-form')
const profileFormElement = document.getElementById('profile-form')
const avatarFormElement = document.getElementById('avatar-form')
const popupNameInput = profileFormElement.querySelector('.popup__input_type_name')
const popupDescInput = profileFormElement.querySelector('.popup__input_type_description')

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64', headers: {
        authorization: 'da5e3f1b-5494-4e8a-9664-96fdffad12db', 'Content-Type': 'application/json'
    }
});

const userInfo = new UserInfo({
    nameSelector: '.profile__title', descriptionSelector: '.profile__subtitle', avatarSelector: '.profile__photo'
})

api.getUserInfo()
    .then(data => {
        userInfo.setUserInfo(data.name, data.about, data._id)
        userInfo.setUserAvatar(data.avatar)
    })

api
    .getInitialCards()
    .then(data => {
        data.reverse();
        data.forEach(card => {
            cards.addItem(createCard(card.name, card.link, card._id, card.owner._id, userInfo.getUserId(), card.likes))
        })
    })
    .catch(err => console.log(err))

const cards = new Section({
    items: [], renderer: (item) => {
        const card = createCard(item.name, item.link, item._id, item.owner._id, userInfo.getUserInfo(), item.likes)
        cards.addItem(card)
    }
}, cardContainerSelector)

const imagePopup = new PopupWithImage('.popup_type_img')
imagePopup.setEventListeners();

const deletePopup = new DeletePopup(deletePopupSelector)
deletePopup.setEventListeners();

const createCard = (name, image, id, ownerId, userId, likes) => {
    const card = new Card({
        cardTemplateSelector: '#element-template', name, image, handleCardClick: () => {
            imagePopup.open(name, image)
        }, handleDeleteClick: () => {
            deletePopup.open();
            deletePopup.confirmDeleteCallback(() => {
                api.deleteCard(id)
                    .then(() => {
                        card.removeCard()
                        deletePopup.close();

                    })
            });
        }, handleLikeClick: () => {
            card.isLiked ? api.removeLikeFromCard(card._id).then((data) => {
                card.removeLike();
                card.setLikesCount(data.likes)
            }) : api.setLikeToCard(card._id).then((data) => {
                card.setLike();
                card.setLikesCount(data.likes);
            })
        }, id, userId, ownerId, likes
    })
    return card.generateCard();
}

const popupAddCard = new PopupWithForm(addPopupSelector, (evt, inputs) => {
    evt.preventDefault();
    popupAddCard.isLoading(true)
    api.postCard(inputs['place-name-input'], inputs['img-input'])
        .then(data => {
            const card = createCard(data.name, data.link, data._id, data.owner._id, userInfo.getUserId(), data.likes)
            cards.addItem(card)
            popupAddCard.close()
        })
    popupAddCard.isLoading(false)
}, {defaultText: 'Создать', loadingText: 'Создание...'})
popupAddCard.setEventListeners()

addBtn.addEventListener('click', () => {
    newCardValidation.resetValidation();
    popupAddCard.open()
})

const popupEditProfile = new PopupWithForm(editPopupSelector, (evt, inputs) => {
    evt.preventDefault()
    popupEditProfile.isLoading(true)
    api.setUserInfo(inputs['name-input'], inputs['description-input'])
        .then(data => {
            userInfo.setUserInfo(data.name, data.about, data._id)
            userInfo.setUserAvatar(data.avatar)
            popupEditProfile.close()
        })
    popupEditProfile.isLoading(false)
}, {defaultText: 'Сохранить', loadingText: 'Сохранение...'});
popupEditProfile.setEventListeners()

const popupChangeAvatar = new PopupWithForm(avatarPopupSelector, (evt, inputs) => {
    evt.preventDefault();
    popupChangeAvatar.isLoading(true)
    api.updateUserAvatar(inputs['img-input'])
        .then(data => {
            userInfo.setUserAvatar(data.avatar)
            popupChangeAvatar.close()
        })
    popupChangeAvatar.isLoading(false)
}, {defaultText: 'Сохранить', loadingText: 'Сохранение...'})
popupChangeAvatar.setEventListeners();

avatarBtn.addEventListener('click', () => {
    avatarValidation.resetValidation();
    popupChangeAvatar.open();
})

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
const avatarValidation = new FormValidator(selectors, avatarFormElement);
avatarValidation.enableValidation();
profileValidation.enableValidation();
newCardValidation.enableValidation();

cards.renderItems();








