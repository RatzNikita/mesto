import Popup from "./Popup.js";

class PopupWithForm extends Popup {

    constructor(popupSelector, submitCallback, buttonText) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._popupForm = this._popupElement.querySelector('.popup__form')
        this._submitButton = this._popupElement.querySelector('.popup__submit-btn')
        this._buttonText = buttonText
        this._inputsList = this._popupForm.querySelectorAll('.popup__input')
    }

    _getInputValues() {
        const inputsValues = {}
        this._inputsList.forEach(input => {
            inputsValues[input.name] = input.value
        })
        return inputsValues;
    }

    _clearInputs() {
        this._popupForm.reset();
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener('submit', (evt) => {
            this._submitCallback(evt, this._getInputValues())
        })
    }

    close() {
        super.close();
        this._clearInputs()
    }

    isLoading(isLoading) {
        isLoading
            ? this._submitButton.textContent = this._buttonText.loadingText
            : this._submitButton.textContent = this._buttonText.defaultText

    }
}

export default PopupWithForm