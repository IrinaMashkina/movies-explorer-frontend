class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this.handleResponse);
  }

  createNewMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        country: data.country || "country",
        director: data.director || "director",
        duration: data.duration || 0,
        year: data.year || "year",
        description: data.description || "description",
        image: `https://api.nomoreparties.co${data.image.url}` || "https://www.something.com",
        trailer: data.trailerLink || "https://www.something.com",
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}` || "https://www.something.com",
        movieId: data.id,
        nameRU: data.nameRU || "Название фильма",
        nameEN: data.nameEN || "nameEN",
      }),
    }).then(this.handleResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this.handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this.handleResponse);
  }

  updateUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this.handleResponse);
  }

}

// создать экземпляр Api
const mainApi = new Api({
  baseUrl: "https://api.movies-exp.nomoredomains.monster",
  // baseUrl: "http://localhost:5000",
});

export default mainApi;
