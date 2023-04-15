class Api {
    constructor(options) {
        this._options = options
    }

    getInitialCards() {
        return fetch(this._options.baseUrl + '/cards', {
            method: 'GET',
            headers: this._options.headers
        })
            .then(res => {
              return  res.ok
                    ? res.json()
                    : Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

    postCard(name, link) {
        return fetch(this._options.baseUrl + '/cards', {
            method: 'POST',
            headers: this._options.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(res => {
                return res.ok
                    ? res.json()
                    : Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

    deleteCard(id) {
        return fetch(this._options.baseUrl + `/cards/${id}`, {
            method: 'DELETE',
            headers: this._options.headers,
        })
            .then(res => {
                return res.ok
                    ? res.json()
                    : Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

    setLikeToCard(id) {
        return fetch(this._options.baseUrl + `/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._options.headers,
        })
            .then(res => {
                return res.ok
                    ? res.json()
                    : Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

    removeLikeFromCard(id) {
        return fetch(this._options.baseUrl + `/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._options.headers,
        })
            .then(res => {
                return res.ok
                    ? res.json()
                    : Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }


    getUserInfo() {
        return fetch(this._options.baseUrl + '/users/me', {
            method: 'GET',
            headers: this._options.headers
        })
            .then(res => {
                return  res.ok
                    ? res.json()
                    : Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

    setUserInfo(name, about) {
        return fetch(this._options.baseUrl + '/users/me', {
            method: 'PATCH',
            headers: this._options.headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then(res => {
                return  res.ok
                    ? res.json()
                    : Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

    updateUserAvatar(url) {
        return fetch(this._options.baseUrl + '/users/me/avatar', {
            method: 'PATCH',
            headers: this._options.headers,
            body: JSON.stringify({
                avatar: url,
            })
        })
            .then(res => {
                return  res.ok
                    ? res.json()
                    : Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

}

export default Api