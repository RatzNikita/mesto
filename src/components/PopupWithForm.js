import Popup from "./Popup.js";

class PopupWithForm extends Popup {

    constructor(popupSelector,submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._popupForm = this._popupElement.querySelector('.popup__form')
    }

    _getInputValues() {
        const inputsList = this._popupForm.querySelectorAll('.popup__input')
        let inputsValues = {}
        inputsList.forEach(input => {
            inputsValues[input.name] = input.value
        })
        return inputsValues;
    }

    _clearInputs() {
        this._popupForm.reset();
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