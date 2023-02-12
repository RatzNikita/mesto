const name = document.querySelector('.profile__title')
const description = document.querySelector('.profile__subtitle')
const cardContainer = document.querySelector('.elements-list')
const cardTemplate = document.querySelector('#element-template').content;
const editPopup = document.querySelector('.popup_type_edit')
const editBtn = document.querySelector('.profile__edit-button')
const editPopupInputForm = editPopup.querySelector('.popup__form')
const profileName = editPopup.querySelector('.popup__input_type_name')
const profileDesc = editPopup.querySelector('.popup__input_type_description')
const addBtn = document.querySelector('.profile__add-button')
const addPopup = document.querySelector('.popup_type_add')
const addPopupInputForm = addPopup.querySelector('.popup__form')
const cardName = addPopup.querySelector('.popup__input_type_name')
const cardImg = addPopup.querySelector('.popup__input_type_description')
const imagePopup = document.querySelector('.popup_type_img')
const popupCloseButtons = document.querySelectorAll('.popup__close-btn')
const imagePopupImg = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption')

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const addListenersToElement = (cardElement) => {
    const elementTitle = cardElement.querySelector('.element__title')
    const elementDeleteBtn = cardElement.querySelector('.element__delete-button')
    const elementLikeBtn = cardElement.querySelector('.element__like-button')
    const elementImg = cardElement.querySelector('.element__image')

   elementDeleteBtn.addEventListener('click', evt =>
        evt.target.closest('.elements-list__member').remove())

    elementLikeBtn.addEventListener('click', evt =>
        evt.target.classList.toggle('element__like-button_active'))

    elementImg.addEventListener('click', () => {
        imagePopup.classList.add('popup_opened')
        imagePopupImg.src = elementImg.src
        imagePopupImg.alt = elementTitle.textContent
        imagePopupCaption.textContent = elementTitle.textContent
    })
}

const createCard = (title,img) => {
    const cardElement = cardTemplate.querySelector('.elements-list__member').cloneNode(true);
    const elementTitle = cardElement.querySelector('.element__title')
    const elementImg = cardElement.querySelector('.element__image')
    elementTitle.textContent = title
    elementImg.alt = title
    elementImg.src = img
    addListenersToElement(cardElement)
    return cardElement
}

const openPopup = (popup) => {
    popup.classList.add('popup_opened')
}

const hidePopup = (popup) => {
    popup.classList.remove('popup_opened')
}

initialCards.map(e => {
    cardContainer.append(createCard(e.name,e.link))
})

addBtn.addEventListener('click', () => {
    addPopup.classList.add('popup_opened')
})

addPopupInputForm.addEventListener('submit', evt => {
    evt.preventDefault()
    cardContainer.prepend(createCard(cardName.value, cardImg.value))
    cardName.value = ''
    cardImg.value = ''
    hidePopup(addPopup)
})

editBtn.addEventListener('click', () => {
    openPopup(editPopup)
    profileName.value = name.textContent
    profileDesc.value = description.textContent
})

editPopupInputForm.addEventListener('submit', evt => {
    evt.preventDefault()
    name.textContent = profileName.value
    description.textContent = profileDesc.value
    hidePopup(editPopup)
})

popupCloseButtons.forEach(button => {
    const popup = button.closest('.popup')
    button.addEventListener('click', () => hidePopup(popup))
})

