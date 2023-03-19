class FormValidator {

    constructor(selectors, formElement) {
        this.selectors = selectors
        this.formElement = formElement
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this.formElement.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.add(this.selectors.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.selectors.errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this.formElement.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.remove(this.selectors.inputErrorClass);
        errorElement.classList.remove(this.selectors.errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity(inputElement) {
        !inputElement.validity.valid
            ? this._showInputError(inputElement, inputElement.validationMessage)
            : this._hideInputError(inputElement);
    }

    _setEventListeners() {
        this._inputList = Array.from(this.formElement.querySelectorAll(this.selectors.inputSelector));
        this._buttonElement = this.formElement.querySelector(this.selectors.submitButtonSelector)

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
            this._buttonElement.classList.add(this.selectors.inactiveButtonClass)
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this.selectors.inactiveButtonClass)
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