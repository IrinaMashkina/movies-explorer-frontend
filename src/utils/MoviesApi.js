class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
  }

  handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this.handleResponse);
  }
}

// создать экземпляр Api
const moviesApi = new Api({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
