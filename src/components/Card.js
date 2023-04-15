
class Card {

    constructor(cardTemplateSelector, title, img, handleCardClick,deletePopup,id) {
        this._cardTemplateSelector = cardTemplateSelector;
        this._title = title;
        this._img = img;
        this._handleCardClick = handleCardClick;
        this._deletePopup = deletePopup
        this._id = id
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
        this._elementImg.addEventListener('click', () => this._handleCardClick())
    }


    _likeBtnClickCallback() {
        this._elementLikeBtn.classList.toggle('element__like-button_active')

    }

    _deleteBtnClickCallback() {
        this._deletePopup.deleteCard(this._id)
    }


}

export default Card;