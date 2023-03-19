class FormValidator {

    constructor(selectors, formElement) {
        this._selectors = selectors
        this._formElement = formElement
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.add(this._selectors.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._selectors.errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.remove(this._selectors.inputErrorClass);
        errorElement.classList.remove(this._selectors.errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity(inputElement) {
        !inputElement.validity.valid
            ? this._showInputError(inputElement, inputElement.validationMessage)
            : this._hideInputError(inputElement);
    }

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._selectors.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._selectors.submitButtonSelector)

        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => this._formInputCallback(inputElement));
        });
    }

    _formInputCallback(inputElement) {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
    }


    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._selectors.inactiveButtonClass)
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._selectors.inactiveButtonClass)
            this._buttonElement.disabled = false;
        }
    }


    resetValidation() {

        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    }

    enableValidation() {
        this._setEventListeners()

    }
}

export default FormValidator