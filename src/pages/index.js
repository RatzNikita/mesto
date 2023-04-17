import './index.css'

import {
    selectors,
    editBtn,
    avatarBtn,
    addBtn,
    avatarPopupSelector,
    addPopupSelector,
    popupDescInput,
    cardContainerSelector,
    profileFormElement,
    avatarFormElement,
    popupNameInput,
    editPopupSelector,
    deletePopupSelector,
    cardFormElement
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import UserInfo from "../components/UserInfo.js"
import Api from "../components/Api.js"
import DeletePopup from "../components/DeletePopup";

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64', headers: {
        authorization: 'da5e3f1b-5494-4e8a-9664-96fdffad12db', 'Content-Type': 'application/json'
    }
});

const userInfo = new UserInfo({
    nameSelector: '.profile__title', descriptionSelector: '.profile__subtitle', avatarSelector: '.profile__photo'
})

const cards = new Section({
    items: [], renderer: (item) => {
        const card = createCard(item.name, item.link, item._id, item.owner._id, userInfo.getUserId(), item.likes)
        cards.addItem(card)
    }
}, cardContainerSelector)

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([currentUser, initialCards]) => {
        initialCards.reverse()
        userInfo.setUserInfo(currentUser.name, currentUser.about, currentUser._id);
        userInfo.setUserAvatar(currentUser.avatar)
        cards.addItems(initialCards);
    })
    .catch((err) => console.log(err))

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
                    .catch((err) => console.log(err))
            });
        }, handleLikeClick: () => {
            card.isLiked
                ? api.removeLikeFromCard(card._id)
                    .then((data) => {
                        card.removeLike();
                        card.setLikesCount(data.likes)
                    })
                    .catch((err) => console.log(err))
                : api.setLikeToCard(card._id)
                    .then((data) => {
                        card.setLike();
                        card.setLikesCount(data.likes)
                    })
                    .catch((err) => console.log(err))
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
        .catch((err) => console.log(err))
        .finally(() => {
            popupAddCard.isLoading(false)
        })
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
        .catch((err) => console.log(err))
        .finally(() => {
            popupEditProfile.isLoading(false)
        })
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
        .catch((err) => console.log(err))
        .finally(() => {
            popupChangeAvatar.isLoading(false)
        })
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








