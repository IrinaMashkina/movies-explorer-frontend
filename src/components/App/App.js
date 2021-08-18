import React from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute";

import auth from "../../utils/Auth";
// import mainApi from "../../utils/MainApi";
// import moviesApi from "../../utils/MoviesApi";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});

  const [isLoadingSignup, setIsLoadingSignup] = React.useState(false);
  const [isLoadingSignin, setIsLoadingSignin] = React.useState(false);

  function handleRegistration(data) {
    setIsLoadingSignup(true);
    auth
      .register(data)
      .then((data) => {
        history.push("/signin");
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoadingSignup(false));
  }

  function handleAuthorization(data) {
    setIsLoadingSignin(true);
    auth
      .authorize(data)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoadingSignin(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Route strict path="/(movies|saved-movies|profile)">
          <Header loggedIn={loggedIn} />
        </Route>

        <Switch>
          <Route path="/signup">
            <Register
              onRegistration={handleRegistration}
              isLoading={isLoadingSignup}
            />
          </Route>

          <Route path="/signin">
            <Login
              onAuthotization={handleAuthorization}
              isLoading={isLoadingSignin}
            />
          </Route>

          <ProtectedRoute
            loggedIn={loggedIn}
            path="/movies"
            component={Movies}
          ></ProtectedRoute>

          <ProtectedRoute
            loggedIn={loggedIn}
            path="/saved-movies"
            component={SavedMovies}
          ></ProtectedRoute>

          <ProtectedRoute
            loggedIn={loggedIn}
            path="/profile"
            component={Profile}
          ></ProtectedRoute>

          <Route exact path="/">
            <div className="page">
              <Main />
            </div>
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
        <Route strict path="/(|movies|saved-movies|profile)">
          <Footer loggedIn={loggedIn} />
        </Route>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
