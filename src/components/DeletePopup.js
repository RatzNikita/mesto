import Popup from "./Popup";

class DeletePopup extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
        this._popupForm = this._popupElement.querySelector('.popup__form')
    }

    confirmDeleteCallback(callback) {
        this._confirmCallback = callback
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._confirmCallback()
        })
    }

    close() {
        super.close();
    }
}

export default DeletePopup