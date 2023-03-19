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
        const inputList = Array.from(this.formElement.querySelectorAll(this.selectors.inputSelector));
        const buttonElement = this.formElement.querySelector(this.selectors.submitButtonSelector)

        this._toggleButtonState(inputList, buttonElement);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    }


    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this.selectors.inactiveButtonClass)
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(this.selectors.inactiveButtonClass)
            buttonElement.disabled = false;
        }
    }

    enableValidation() {
        this.formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
        });
        this._setEventListeners()

    }
}

export default FormValidator