import Popup from "./Popup.js";


class PopupWithForm extends Popup {


    constructor(popupSelector,submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
    }

    _getInputValues() {
        this.nameInput = this._popupElement.querySelector('.popup__input_type_name')
        this.descInput = this._popupElement.querySelector('.popup__input_type_description')
        return {
            name: this.nameInput.value,
            desc: this.descInput.value,
        }

    }

    _clearInputs() {
        this.nameInput.value = ''
        this.descInput.value = ''
    }
    setEventListeners() {
        super.setEventListeners()
        this._inputForm = this._popupElement.querySelector('.popup__form')
        this._inputForm.addEventListener('submit', (evt) => {
            this._submitCallback(evt,this._getInputValues())
        })
    }

    close() {
        super.close();
        this._clearInputs()
    }
}

export default PopupWithForm