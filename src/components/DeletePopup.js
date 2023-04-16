import Popup from "./Popup";

class DeletePopup extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
        this._confirmButton = document.querySelector('.button__confirm-delete')
    }

    confirmDeleteCallback(callback) {
        this._confirmCallback = callback
    }

    setEventListeners() {
        super.setEventListeners()
        this._confirmButton.addEventListener('click', (evt) => {
            evt.preventDefault()
            this._confirmCallback()
        })
    }

    close() {
        super.close();
    }
}

export default DeletePopup