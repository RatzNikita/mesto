import {openPopup} from "./index.js";

const imagePopup = document.querySelector('.popup_type_img')
const imagePopupImg = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption')

class Card {

    constructor(cardTemplateSelector, title, img) {
        this._cardTemplateSelector = cardTemplateSelector;
        this._title = title;
        this._img = img;
    }

    _getTemplate() {
        return document
            .querySelector(this._cardTemplateSelector)
            .content
            .querySelector('.elements-list__member')
            .cloneNode(true);
    }

    generateCard() {
        this.cardElement = this._getTemplate();
        this._elementTitle = this.cardElement.querySelector('.element__title')
        this._elementImg = this.cardElement.querySelector('.element__image')
        this._elementTitle.textContent = this._title
        this._elementImg.alt = this._title
        this._elementImg.src = this._img
        this._addListenersToElement()
        return this.cardElement
    }

    _addListenersToElement() {
        this._elementDeleteBtn = this.cardElement.querySelector('.element__delete-button')
        this._elementLikeBtn = this.cardElement.querySelector('.element__like-button')


        this._elementDeleteBtn.addEventListener('click', () => this._deleteBtnClickCallback())
        this._elementLikeBtn.addEventListener('click', () => this._likeBtnClickCallback())
        this._elementImg.addEventListener('click', () => this._imageClickCallback())
    }

    _imageClickCallback() {
        openPopup(imagePopup)
        imagePopupImg.src = this._img
        imagePopupImg.alt = this._title
        imagePopupCaption.textContent = this._title
    }

    _likeBtnClickCallback() {
        this._elementLikeBtn.classList.toggle('element__like-button_active')

    }

    _deleteBtnClickCallback() {
        this.cardElement.remove()
        this.cardElement = null;
    }


}

export default Card;