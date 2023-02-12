const name = document.querySelector('.profile__title')
const description = document.querySelector('.profile__subtitle')
const cardContainer = document.querySelector('.elements-list')
const cardTemplate = document.querySelector('#element-template').content;

const editPopup = document.querySelector('.popup_type_edit')
const editBtn = document.querySelector('.profile__edit-button')
const editPopupCloseBtn = editPopup.querySelector('.popup__close-btn')
const editPopupInputForm = editPopup.querySelector('.popup__form')
const profileName = editPopup.querySelector('.popup__input_type_name')
const profileDesc = editPopup.querySelector('.popup__input_type_description')

const addBtn = document.querySelector('.profile__add-button')
const addPopup = document.querySelector('.popup_type_add')
const addPopupCloseBtn = addPopup.querySelector('.popup__close-btn')
const addPopupInputForm = addPopup.querySelector('.popup__form')
const cardName = addPopup.querySelector('.popup__input_type_name')
const cardImg = addPopup.querySelector('.popup__input_type_description')

const imagePopup = document.querySelector('.popup_type_img')
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-btn')
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
    cardElement.querySelector('.element__delete-button').addEventListener('click', evt =>
        evt.target.parentElement.parentElement.remove())
    cardElement.querySelector('.element__like-button').addEventListener('click', evt => {
        evt.target.classList.toggle('element__like-button_active')
    })
    cardElement.querySelector('.element__image').addEventListener('click', () => {
        imagePopup.classList.add('popup_opened')
        imagePopupImg.src = cardElement.querySelector('.element__image').src
        imagePopupImg.alt = cardElement.querySelector('.element__title').textContent
        imagePopupCaption.textContent = cardElement.querySelector('.element__title').textContent
    })
}

initialCards.map(e => {
    let cardElement = cardTemplate.querySelector('.elements-list__member').cloneNode(true);
    cardElement.querySelector('.element__title').textContent = e.name;
    cardElement.querySelector('.element__image').src = e.link;
    addListenersToElement(cardElement)
    cardContainer.append(cardElement)
})

addBtn.addEventListener('click', () => {
    cardName.value = ''
    cardImg.value = ''
    addPopup.classList.add('popup_opened')
})

addPopupCloseBtn.addEventListener('click', () => addPopup.classList.remove('popup_opened'));

addPopupInputForm.addEventListener('submit', evt => {
    evt.preventDefault()
    const cardElement = cardTemplate.querySelector('.elements-list__member').cloneNode(true);
    cardElement.querySelector('.element__title').textContent = cardName.value;
    cardElement.querySelector('.element__image').src = cardImg.value;
    cardElement.querySelector('.element__image').alt = cardName.value;
    addListenersToElement(cardElement)
    cardContainer.prepend(cardElement)
    addPopup.classList.remove('popup_opened')
})

editBtn.addEventListener('click', () => {
    editPopup.classList.add('popup_opened')
    profileName.value = name.textContent
    profileDesc.value = description.textContent
})

editPopupCloseBtn.addEventListener('click', () => editPopup.classList.remove('popup_opened'))

editPopupInputForm.addEventListener('submit', evt => {
    evt.preventDefault()
    name.textContent = profileName.value
    description.textContent = profileDesc.value
    editPopup.classList.remove('popup_opened')
})

imagePopupCloseButton.addEventListener('click', () => imagePopup.classList.remove('popup_opened'))
