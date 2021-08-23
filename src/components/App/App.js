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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import auth from "../../utils/Auth";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});

  const [allMovies, setAllMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const [serverError, setServerError] = React.useState("");

  const [isLoadingSignup, setIsLoadingSignup] = React.useState(false);
  const [isLoadingSignin, setIsLoadingSignin] = React.useState(false);
  const [isLoadingUserInfo, setIsLoadingUserInfo] = React.useState(false);
  // const [isLoadingAddNewCard, setIsLoadingAddNewCard] = React.useState(false);
  // const [isLoadingDeleteCard, setIsLoadingDeleteCard] = React.useState(false);

  // проверка токена
  const checkToken = React.useCallback(() => {
    mainApi
      .getUserInfo()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        history.push("/movies");
      })
      .catch(() => {
        setCurrentUser({});
        setLoggedIn(false);
        history.push("/signin");
      });
  }, [history]);

  React.useEffect(() => {
    checkToken();
  }, [history, checkToken]);

  // получение списка фильмов при логине

  React.useEffect(() => {
    if (loggedIn) {
      moviesApi
        .getMovies()
        .then((res) => {
          setAllMovies(res);
          localStorage.setItem("allMovies", JSON.stringify(res));
        })
        .catch((err) => {
          localStorage.removeItem("allMovies");
          setServerError(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        });

      mainApi
        .getSavedMovies()
        .then((myMovies) => {
          setSavedMovies(myMovies);
          localStorage.setItem("savedMovies", JSON.stringify(myMovies));
        })
        .catch(() => {
          localStorage.removeItem("savedMovies");
          setServerError(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        });
    }
  }, [loggedIn]);

  // регистрация

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

  // авторизация

  function handleAuthorization(data) {
    setIsLoadingSignin(true);
    auth
      .authorize(data)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
          history.push("/movies");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoadingSignin(false));
  }

  // логаут

  const handleLogout = () => {
    auth
      .logout()
      .then(() => {
        setCurrentUser({});
        setLoggedIn(false);
        history.push("/signin");
      })
      .catch((err) => console.log(err));
  };

  // обновление данных пользователя

  const updateUserInfo = (user) => {
    setIsLoadingUserInfo(true);
    mainApi
      .updateUserInfo(user)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoadingUserInfo(false));
  };

  // добавление фильма в savedMovies
  const addMovie = (movie) => {
    mainApi
      .createNewMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // удаление фильма из сохранённых
  const deleteMovie = (movieId) => {
    mainApi
      .deleteMovie(movieId)
      .then(() => {
        const newArr = savedMovies.filter((item) => item.id !== movieId);
        setSavedMovies(newArr);
      })
      .catch((err) => console.log(err));
  };

  // добавленные фильмы в сохранённые
  const isAddedMovie = (movie) =>
    savedMovies.some((item) => {
      console.log(`item: ${item._id}`);
      console.log(`movie при проверке added: ${movie.id}`);
      return item._id === movie.id;
    });

  // добавление или удаление фильма по лайку в зависимости от того, добавлен он или нет
  const handleAddOrDeleteMovie = (movie, isAdded) => {
    !isAdded ? addMovie(movie) : deleteMovie(movie);
  };

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
            allMovies={allMovies}
            handleAddOrDeleteMovie={handleAddOrDeleteMovie}
            isAddedMovie={isAddedMovie}
          ></ProtectedRoute>

          <ProtectedRoute
            loggedIn={loggedIn}
            path="/saved-movies"
            component={SavedMovies}
            savedMovies={savedMovies}
            deleteMovie={deleteMovie}
          ></ProtectedRoute>

          <ProtectedRoute
            loggedIn={loggedIn}
            logout={handleLogout}
            path="/profile"
            component={Profile}
            updateUserInfo={updateUserInfo}
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
        <Route strict path="/(|movies|saved-movies)">
          <Footer loggedIn={loggedIn} />
        </Route>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
