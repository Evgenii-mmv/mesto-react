class Api {
  constructor({ baseUrl, headers }) {
      this.baseUrl = baseUrl;
      this.headers = headers;
  }
  //вывод даты
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    // Запрос массив карточек (2)
    getCards() {
        return fetch(this.baseUrl + '/cards', {
            headers: this.headers
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }

    // дата в профиля (1)
    getUser() {
        return fetch(this.baseUrl + '/users/me', {
            headers: this.headers
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }
    // изменения даты профиля(3)
    updateUser(name, about) {
        return fetch(this.baseUrl + '/users/me',
            {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({
                    name: name,
                    about: about
                })
            })
            .then((res) => {
                return this._getResponseData(res);
            })
    }
    //Создание новой карточки (4)
    createCard(name, link) {
        return fetch(this.baseUrl + '/cards', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link,
            })
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }
    //удаление карточки (7)
    deleteCard(cardId) {
        return fetch(this.baseUrl + '/cards/' + cardId, {
            method: 'DELETE',
            headers: this.headers,
        })

            .then((res) => {
                return this._getResponseData(res);
            })
    }
    //лайк(8)
    putLike(cardId) {
        return fetch(this.baseUrl + '/cards/' + cardId + '/likes/', {
            method: 'PUT',
            headers: this.headers,
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }

    changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
            return this.deleteLike(cardId)
        }
        return this.putLike(cardId);
    }

    //анлайк(8)
    deleteLike(cardId) {
        return fetch(this.baseUrl + '/cards/' + cardId + '/likes/', {
            method: 'DELETE',
            headers: this.headers,
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }
    //новая аватарка (9)
    setNewAvatar(avatar) {
        return fetch(this.baseUrl + '/users/me/avatar/', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: avatar,
            })
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }
}

const api = new Api ({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
    headers: {
        authorization: '52388433-afce-471a-9922-beec3eda8533',
        'Content-Type': 'application/json'
    },
});

export default api;