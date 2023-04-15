import Popup from "./Popup";

class DeletePopup extends Popup {

    constructor(popupSelector,submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._popupForm = this._popupElement.querySelector('.popup__form')
    }


    deleteCard(id) {
        this._cardId = id;
        super.open();

    }

    setEventListeners() {
        super.setEventListeners()
        this._inputForm = this._popupElement.querySelector('.popup__form')
        this._inputForm.addEventListener('submit', (evt) => {
            this._submitCallback(evt,this._cardId)
        })
    }

    close() {
        super.close();

    }
}

export default DeletePopup