class UserInfo {

    constructor({nameSelector, descriptionSelector}) {
        this._nameSelector = nameSelector
        this._descriptionSelector = descriptionSelector
        this._name = document.querySelector(nameSelector).textContent
        this._description = document.querySelector(descriptionSelector).textContent
    }

    getUserInfo() {
        return {
            name: document.querySelector(this._nameSelector),
            desc: document.querySelector(this._descriptionSelector)
        }
    }

    setUserInfo(name,desc) {
        document.querySelector(this._nameSelector).textContent = name
        document.querySelector(this._descriptionSelector).textContent = desc
    }
}

export default UserInfo