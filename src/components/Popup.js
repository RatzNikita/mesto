class Popup {

    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
    }

    open() {
        this._popupElement.classList.add('popup_opened')
        document.addEventListener('keydown', this._handleEscClose)
    }

    close() {
        this._popupElement.classList.remove('popup_opened')
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close()
        }

    }

    setEventListeners() {
        this._button = this._popupElement.querySelector('.popup__close-btn')
        this._button.addEventListener('click', () => {
            this.close();
        })
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
        })
    }
}

export default Popup