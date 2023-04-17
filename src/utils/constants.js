export const selectors = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

export const editBtn = document.querySelector('.profile__edit-button')
export const addBtn = document.querySelector('.profile__add-button')
export const avatarBtn = document.querySelector('.profile__update-avatar-button')
export const cardContainerSelector = '.elements-list'
export const editPopupSelector = '.popup_type_edit'
export const addPopupSelector = '.popup_type_add'
export const deletePopupSelector = '.popup_type_delete'
export const avatarPopupSelector = '.popup_type_avatar'
export const cardFormElement = document.getElementById('card-form')
export const profileFormElement = document.getElementById('profile-form')
export const avatarFormElement = document.getElementById('avatar-form')
export const popupNameInput = profileFormElement.querySelector('.popup__input_type_name')
export const popupDescInput = profileFormElement.querySelector('.popup__input_type_description')