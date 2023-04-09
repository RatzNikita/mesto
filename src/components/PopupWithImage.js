import Popup from "./Popup.js";

class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
        this._popupCaption = this._popupElement.querySelector('.popup__caption')
        this._popupImage = this._popupElement.querySelector('.popup__image')
    }

    open(title, image) {
        this._popupCaption.textContent = title
        this._popupImage.alt = image
        this._popupImage.src = image
        super.open()
    }
}

export default PopupWithImage