class UserInfo {

    constructor({nameSelector, descriptionSelector, avatarSelector}) {
        this._name = document.querySelector(nameSelector)
        this._description = document.querySelector(descriptionSelector)
        this._avatar = document.querySelector(avatarSelector)
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            desc: this._description.textContent,
        }
    }

    setUserInfo(name, desc, id) {
        this._name.textContent = name
        this._description.textContent = desc
        this._id = id
    }

    setUserAvatar(url) {
        this._avatar.src = url
    }

    getUserId() {
        return this._id
    }
}

export default UserInfo