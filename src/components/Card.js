class Card {

    constructor({
                    cardTemplateSelector,
                    name,
                    image,
                    handleCardClick,
                    handleDeleteClick,
                    handleLikeClick,
                    id,
                    userId,
                    ownerId,
                    likes
                }) {
        this._cardTemplateSelector = cardTemplateSelector;
        this._name = name;
        this._img = image;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick
        this._handleLikeClick = handleLikeClick
        this._id = id
        this._userId = userId
        this._ownerId = ownerId
        this._likes = likes
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
        this._elementLikeBtn = this.cardElement.querySelector('.element__like-button')
        this._elementLikesCounter = this.cardElement.querySelector('.element__like-counter')
        this._elementTitle.textContent = this._name
        this._elementImg.alt = this._name
        this._elementImg.src = this._img
        this._addListenersToElement()
        this.setLikesCount(this._likes)
        this._setUserLikes()
        return this.cardElement
    }

    removeCard() {
        this.cardElement.remove();
        this.cardElement = null;
    }

    _addListenersToElement() {
        this._elementLikeBtn.addEventListener('click', () => this._handleLikeClick())
        this._elementImg.addEventListener('click', () => this._handleCardClick())
        this._elementDeleteBtn = this.cardElement.querySelector('.element__delete-button')
        this._ownerId === this._userId
            ? this._elementDeleteBtn.addEventListener('click', () => this._handleDeleteClick())
            : this.cardElement.querySelector('.element__delete-button').remove()
    }

    setLikesCount(data) {
        this._elementLikesCounter.textContent = data.length;
    }

    _checkUserLikes() {
        return this._likes.some(like => {
            return like._id === this._userId
        });
    }

    setLike() {
        this._elementLikeBtn.classList.add('element__like-button_active');
        this.isLiked = true;
    }

    removeLike() {
        this._elementLikeBtn.classList.remove('element__like-button_active');
        this.isLiked = false;
    }

    _setUserLikes() {
        this._checkUserLikes()
            ? this.setLike()
            : this.removeLike()
    };
}

export default Card;