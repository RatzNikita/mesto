let popup = document.querySelector('.popup')
let editBtn = document.querySelector('.profile__edit-button')
let inputForm = document.querySelector('.popup__form')
let closeBtn = document.querySelector('.popup__close-btn')
let profileName = document.querySelector('.profile__title')
let profileDesc = document.querySelector('.profile__subtitle')
let name = document.querySelector('.popup__input_type_name')
let description = document.querySelector('.popup__input_type_description')


function changeProfile(evt) {
    evt.preventDefault()
    profileName.textContent = name.value
    profileDesc.textContent = description.value
    hidePopup()
}

function showPopup() {
    popup.classList.add('popup_opened')
    name.value = profileName.textContent
    description.value = profileDesc.textContent

}

function hidePopup() {
    popup.classList.remove('popup_opened')
}

closeBtn.addEventListener('click', hidePopup)
editBtn.addEventListener('click', showPopup)
inputForm.addEventListener('submit', changeProfile)