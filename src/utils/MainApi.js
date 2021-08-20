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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(this.handleResponse);
  }

  createNewMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailer: data.trailer,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
        nameRU: data.nameEN,
        nameEN: data.nameEN,
      }),
    }).then(this.handleResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(this.handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Access-Control-Allow-Credentials": true,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(this.handleResponse);
  }

  updateUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this.handleResponse);
  }

  //   changeLikeCardStatus(id, isLiked) {
  //     return fetch(`${this._baseUrl}/cards/likes/${id}`, {
  //       method: isLiked ? "PUT" : "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       },
  //     }).then(this.handleResponse);
  //   }
}

// создать экземпляр Api
const mainApi = new Api({
  // baseUrl: "https://api.movies-exp.nomoredomains.monster",
  baseUrl: "http://localhost:5000",
});

export default mainApi;
