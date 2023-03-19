import {openPopup} from "./index.js";

const imagePopup = document.querySelector('.popup_type_img')
const imagePopupImg = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption')

class Card {

    constructor(cardTemplate, title, img) {
        this._cardTemplate = cardTemplate;
        this.title = title;
        this.img = img;
    }

    _getTemplate() {
        return this._cardTemplate.querySelector('.elements-list__member').cloneNode(true);
    }

     generateCard(){
         const cardElement = this._getTemplate();
         const elementTitle = cardElement.querySelector('.element__title')
         const elementImg = cardElement.querySelector('.element__image')
         elementTitle.textContent = this.title
         elementImg.alt = this.title
         elementImg.src = this.img
         this._addListenersToElement(cardElement)
         return cardElement
     }

    _addListenersToElement(cardElement)  {
        const elementTitle = cardElement.querySelector('.element__title')
        const elementDeleteBtn = cardElement.querySelector('.element__delete-button')
        const elementLikeBtn = cardElement.querySelector('.element__like-button')
        const elementImg = cardElement.querySelector('.element__image')

        elementDeleteBtn.addEventListener('click', () =>
            cardElement.remove())

        elementLikeBtn.addEventListener('click', evt =>
            evt.target.classList.toggle('element__like-button_active'))

        elementImg.addEventListener('click', () => {
            openPopup(imagePopup)
            imagePopupImg.src = elementImg.src
            imagePopupImg.alt = elementTitle.textContent
            imagePopupCaption.textContent = elementTitle.textContent
        })
    }
}

export default Card;