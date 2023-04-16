(()=>{"use strict";var e={inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}const r=function(){function e(t){var n=t.cardTemplateSelector,r=t.name,o=t.image,i=t.handleCardClick,u=t.handleDeleteClick,c=t.handleLikeClick,a=t.id,l=t.userId,s=t.ownerId,f=t.likes;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardTemplateSelector=n,this._name=r,this._img=o,this._handleCardClick=i,this._handleDeleteClick=u,this._handleLikeClick=c,this._id=a,this._userId=l,this._ownerId=s,this._likes=f}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".elements-list__member").cloneNode(!0)}},{key:"generateCard",value:function(){return this.cardElement=this._getTemplate(),this._elementTitle=this.cardElement.querySelector(".element__title"),this._elementImg=this.cardElement.querySelector(".element__image"),this._elementLikeBtn=this.cardElement.querySelector(".element__like-button"),this._elementLikesCounter=this.cardElement.querySelector(".element__like-counter"),this._elementTitle.textContent=this._name,this._elementImg.alt=this._name,this._elementImg.src=this._img,this._addListenersToElement(),this.setLikesCount(this._likes),this._setUserLikes(),this.cardElement}},{key:"removeCard",value:function(){this.cardElement.remove(),this.cardElement=null}},{key:"_addListenersToElement",value:function(){var e=this;this._elementLikeBtn.addEventListener("click",(function(){return e._handleLikeClick()})),this._elementImg.addEventListener("click",(function(){return e._handleCardClick()})),this._elementDeleteBtn=this.cardElement.querySelector(".element__delete-button"),this._elementDeleteBtn.addEventListener("click",(function(t){return e._handleDeleteClick(t)})),this._checkDelete()}},{key:"_checkDelete",value:function(){this._ownerId!==this._userId&&this.cardElement.querySelector(".element__delete-button").remove()}},{key:"setLikesCount",value:function(e){this._elementLikesCounter.textContent=e.length}},{key:"_checkUserLikes",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"setLike",value:function(){this._elementLikeBtn.classList.add("element__like-button_active"),this.isLiked=!0}},{key:"removeLike",value:function(){this._elementLikeBtn.classList.remove("element__like-button_active"),this.isLiked=!1}},{key:"_setUserLikes",value:function(){this._checkUserLikes()?this.setLike():this.removeLike()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectors=t,this._formElement=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.name,"-error"));e.classList.add(this._selectors.inputErrorClass),n.textContent=t,n.classList.add(this._selectors.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.name,"-error"));e.classList.remove(this._selectors.inputErrorClass),t.classList.remove(this._selectors.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._selectors.inputSelector)),this._buttonElement=this._formElement.querySelector(this._selectors.submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){return e._formInputCallback(t)}))}))}},{key:"_formInputCallback",value:function(e){this._checkInputValidity(e),this._toggleButtonState()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._selectors.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._selectors.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const c=u;function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}const s=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this.renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e.renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function y(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}const h=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=y(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popupElement=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._button=this._popupElement.querySelector(".popup__close-btn"),this._button.addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}const k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._submitCallback=t,r._popupForm=r._popupElement.querySelector(".popup__form"),r._submitButton=r._popupElement.querySelector(".popup__submit-btn"),r._buttonText=n,r}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this._popupForm.querySelectorAll(".popup__input"),t={};return e.forEach((function(e){t[e.name]=e.value})),t}},{key:"_clearInputs",value:function(){this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;v(_(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){e._submitCallback(t,e._getInputValues())}))}},{key:"close",value:function(){v(_(u.prototype),"close",this).call(this),this._clearInputs()}},{key:"isLoading",value:function(e){this._submitButton.textContent=e?this._buttonText.loadingText:this._buttonText.defaultText}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}const C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupCaption=t._popupElement.querySelector(".popup__caption"),t._popupImage=t._popupElement.querySelector(".popup__image"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupCaption.textContent=e,this._popupImage.alt=t,this._popupImage.src=t,E(L(u.prototype),"open",this).call(this)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}const P=function(){function e(t){var n=t.nameSelector,r=t.descriptionSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._description=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,desc:this._description.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._name.textContent=e,this._description.textContent=t,this._id=n}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}},{key:"getUserId",value:function(){return this._id}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}const U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=t}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){var e=this;return fetch(this._options.baseUrl+"/cards",{method:"GET",headers:this._options.headers}).then((function(t){return e._checkStatus(t)})).catch((function(e){return console.log(e)}))}},{key:"postCard",value:function(e,t){var n=this;return fetch(this._options.baseUrl+"/cards",{method:"POST",headers:this._options.headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._checkStatus(e)})).catch((function(e){return console.log(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch(this._options.baseUrl+"/cards/".concat(e),{method:"DELETE",headers:this._options.headers}).then((function(e){return t._checkStatus(e)})).catch((function(e){return console.log(e)}))}},{key:"setLikeToCard",value:function(e){var t=this;return fetch(this._options.baseUrl+"/cards/".concat(e,"/likes"),{method:"PUT",headers:this._options.headers}).then((function(e){return t._checkStatus(e)})).catch((function(e){return console.log(e)}))}},{key:"removeLikeFromCard",value:function(e){var t=this;return fetch(this._options.baseUrl+"/cards/".concat(e,"/likes"),{method:"DELETE",headers:this._options.headers}).then((function(e){return t._checkStatus(e)})).catch((function(e){return console.log(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch(this._options.baseUrl+"/users/me",{method:"GET",headers:this._options.headers}).then((function(t){return e._checkStatus(t)})).catch((function(e){return console.log(e)}))}},{key:"setUserInfo",value:function(e,t){var n=this;return fetch(this._options.baseUrl+"/users/me",{method:"PATCH",headers:this._options.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._checkStatus(e)})).catch((function(e){return console.log(e)}))}},{key:"updateUserAvatar",value:function(e){var t=this;return fetch(this._options.baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._options.headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkStatus(e)})).catch((function(e){return console.log(e)}))}},{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}const V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupForm=t._popupElement.querySelector(".popup__form"),t}return t=u,(n=[{key:"confirmDeleteCallback",value:function(e){this._confirmCallback=e}},{key:"setEventListeners",value:function(){var e=this;R(D(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._confirmCallback()}))}},{key:"close",value:function(){R(D(u.prototype),"close",this).call(this)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);var A=document.querySelector(".profile__edit-button"),F=document.querySelector(".profile__add-button"),N=document.querySelector(".profile__update-avatar-button"),J=document.getElementById("card-form"),G=document.getElementById("profile-form"),H=document.getElementById("avatar-form"),z=G.querySelector(".popup__input_type_name"),M=G.querySelector(".popup__input_type_description"),K=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"da5e3f1b-5494-4e8a-9664-96fdffad12db","Content-Type":"application/json"}}),Q=new P({nameSelector:".profile__title",descriptionSelector:".profile__subtitle",avatarSelector:".profile__photo"});K.getUserInfo().then((function(e){Q.setUserInfo(e.name,e.about,e._id),Q.setUserAvatar(e.avatar)})),K.getInitialCards().then((function(e){e.reverse(),e.forEach((function(e){W.addItem(Z(e.name,e.link,e._id,e.owner._id,Q.getUserId(),e.likes))}))})).catch((function(e){return console.log(e)}));var W=new s({items:[],renderer:function(e){var t=Z(e.name,e.link,e._id,e.owner._id,Q.getUserInfo(),e.likes);W.addItem(t)}},".elements-list"),X=new C(".popup_type_img");X.setEventListeners();var Y=new V(".popup_type_delete");Y.setEventListeners();var Z=function(e,t,n,o,i,u){var c=new r({cardTemplateSelector:"#element-template",name:e,image:t,handleCardClick:function(){X.open(e,t)},handleDeleteClick:function(){Y.open(),Y.confirmDeleteCallback((function(){K.deleteCard(n).then((function(){c.removeCard(),Y.close()}))}))},handleLikeClick:function(){c.isLiked?K.removeLikeFromCard(c._id).then((function(e){c.removeLike(),c.setLikesCount(e.likes)})):K.setLikeToCard(c._id).then((function(e){c.setLike(),c.setLikesCount(e.likes)}))},id:n,userId:i,ownerId:o,likes:u});return c.generateCard()},$=new k(".popup_type_add",(function(e,t){e.preventDefault(),$.isLoading(!0),K.postCard(t["place-name-input"],t["img-input"]).then((function(e){var t=Z(e.name,e.link,e._id,e.owner._id,Q.getUserId(),e.likes);W.addItem(t),$.close()})),$.isLoading(!1)}),{defaultText:"Создать",loadingText:"Создание..."});$.setEventListeners(),F.addEventListener("click",(function(){oe.resetValidation(),$.open()}));var ee=new k(".popup_type_edit",(function(e,t){e.preventDefault(),ee.isLoading(!0),K.setUserInfo(t["name-input"],t["description-input"]).then((function(e){Q.setUserInfo(e.name,e.about,e._id),Q.setUserAvatar(e.avatar),ee.close()})),ee.isLoading(!1)}),{defaultText:"Сохранить",loadingText:"Сохранение..."});ee.setEventListeners();var te=new k(".popup_type_avatar",(function(e,t){e.preventDefault(),te.isLoading(!0),K.updateUserAvatar(t["img-input"]).then((function(e){Q.setUserAvatar(e.avatar),te.close()})),te.isLoading(!1)}),{defaultText:"Сохранить",loadingText:"Сохранение..."});te.setEventListeners(),N.addEventListener("click",(function(){ie.resetValidation(),te.open()})),A.addEventListener("click",(function(){re.resetValidation(),ne(),ee.open()}));var ne=function(){var e=Q.getUserInfo();z.value=e.name,M.value=e.desc},re=new c(e,G),oe=new c(e,J),ie=new c(e,H);ie.enableValidation(),re.enableValidation(),oe.enableValidation(),W.renderItems()})();