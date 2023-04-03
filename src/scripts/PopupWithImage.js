import Popup from "./Popup.js";
class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
    }

    open(title,image) {
        this._popupElement.querySelector('.popup__caption').textContent = title
        this._popupElement.querySelector('.popup__image').alt = image
        this._popupElement.querySelector('.popup__image').src = image
        super.open()
    }
}

export default PopupWithImage