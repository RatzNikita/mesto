let popup = document.querySelector('.popup')
let editBtn = document.querySelector('.profile__edit-button')
let submitBtn = document.querySelector('.popup__submit-btn')
let closeBtn = document.querySelector('.popup__close-btn')
let profileName = document.querySelector('.profile__title')
let profileDesc = document.querySelector('.profile__subtitle')
let name = document.querySelector('.popup__input_type_name')
let description = document.querySelector('.popup__input_type_description')

name.value = profileName.innerHTML
description.value = profileDesc.innerHTML


function changeProfile() {
    if (name.value.length > 0 && description.value.length > 0) {
        profileName.innerHTML = name.value
        profileDesc.innerHTML = description.value
    }
    hidePopup()
}

function showPopup() {
    popup.classList.add('popup_opened')
}

function hidePopup() {
    name.value = profileName.innerHTML
    description.value = profileDesc.innerHTML
    popup.classList.remove('popup_opened')
}

closeBtn.addEventListener('click', hidePopup)
editBtn.addEventListener('click', showPopup)
submitBtn.addEventListener('click', changeProfile)