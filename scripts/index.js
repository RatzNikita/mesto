let editPopup = document.querySelector('.popup_type_change')
let addPopup = document.querySelector('.popup_type_add')

let editBtn = document.querySelector('.profile__edit-button')
let addBtn = document.querySelector('.profile__add-button')

let changePopupCloseBtn = editPopup.querySelector('.popup__close-btn')
let addPopupCloseBtn = addPopup.querySelector('.popup__close-btn')

let editPopupInputForm = editPopup.querySelector('.popup__form')
let addPopupInputForm = addPopup.querySelector('.popup__form')

let profileName = document.querySelector('.profile__title')
let profileDesc = document.querySelector('.profile__subtitle')

let name = editPopup.querySelector('.popup__input_type_name')
let description = editPopup.querySelector('.popup__input_type_description')

let cardName = addPopup.querySelector('.popup__input_type_name')
let cardImg = addPopup.querySelector('.popup__input_type_description')

let cardContainer = document.querySelector('.elements-list')

const cardTemplate = document.querySelector('#element-template').content;


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

    initialCards.map( e => {
        const cardElement = cardTemplate.querySelector('.elements-list__member').cloneNode(true);
        cardElement.querySelector('.element__title').textContent = e.name;
        cardElement.querySelector('.element__image').src = e.link;
        cardContainer.append(cardElement)
    })

function addCard(evt) {
    evt.preventDefault()
    const cardElement = cardTemplate.querySelector('.elements-list__member').cloneNode(true);
    cardElement.querySelector('.element__title').textContent = cardName.value;
    cardElement.querySelector('.element__image').src = cardImg.value;
    cardElement.querySelector('.element__image').alt = cardName.value;
    cardContainer.prepend(cardElement)
    hideAddPopup();
}



function changeProfile(evt) {
    evt.preventDefault()
    profileName.textContent = name.value
    profileDesc.textContent = description.value
    hideChangePopup()
}



function showEditPopup() {
    editPopup.classList.add('popup_opened')
    name.value = profileName.textContent
    description.value = profileDesc.textContent
}

function hideChangePopup() {
    editPopup.classList.remove('popup_opened')
}

function hideAddPopup() {
    addPopup.classList.remove('popup_opened')
}

changePopupCloseBtn.addEventListener('click', hideChangePopup)
addPopupCloseBtn.addEventListener('click',hideAddPopup);

editBtn.addEventListener('click', showEditPopup)
addBtn.addEventListener('click', () => addPopup.classList.add('popup_opened'))

editPopupInputForm.addEventListener('submit', changeProfile)
addPopupInputForm.addEventListener('submit',addCard)