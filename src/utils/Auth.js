class Auth {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  register(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        password: data.password,
        email: data.email,
      }),
    }).then(this.handleResponse);
  }

  authorize(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    }).then(this.handleResponse);
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      credentials: "include",
      method: "POST",
      headers: this._headers,
    }).then(this.handleResponse);
  }
}

const auth = new Auth({
  // baseUrl: "https://api.movies-exp.nomoredomains.monster",
  baseUrl: "http://localhost:5000",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default auth;