import React from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

import auth from "../../utils/Auth";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();
  const location = useLocation();

  const [currentUser, setCurrentUser] = React.useState({});

  const [isSuccess, setIsSuccess] = React.useState(false);
  const [successText, setSuccessText] = React.useState("");
  const [unsuccessText, setUnsuccessText] = React.useState("");
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);

  const [allMovies, setAllMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  const [isLoadingSignup, setIsLoadingSignup] = React.useState(false);
  const [isLoadingSignin, setIsLoadingSignin] = React.useState(false);

  const сheckToken = React.useCallback(() => {
    setIsLoading(true);
    const path = location.pathname;
    const token = localStorage.getItem("jwt");
    auth
      .checkToken(token)
      .then((data) => {
        if (data) {
          setCurrentUser(data);
          setLoggedIn(true);
          history.push(path);
        }
      })
      .catch((err) => {
        console.log(err);
        history.push("/");
        setLoggedIn(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      сheckToken();
    }
  }, [сheckToken]);

  // получение списка фильмов и инфо при логине

  React.useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);

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
        })
        .finally(() => setIsLoading(false));

      moviesApi
        .getMovies()
        .then((res) => {
          setAllMovies(res);
          localStorage.setItem("allMovies", JSON.stringify(res));
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("allMovies");
          setIsSuccess(false);
          handleInfoTooltipOpen();
          setUnsuccessText(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        })
        .finally(() => setIsLoading(false));

      mainApi
        .getSavedMovies()
        .then((res) => {
          if (!res.message) {
            const savedArr = res.map((item) => ({ ...item, id: item.movieId }));
            setSavedMovies(savedArr);
            localStorage.setItem("savedMovies", JSON.stringify(savedArr));
          }
        })
        .catch((err) => {
          localStorage.removeItem("savedMovies");
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [loggedIn, history]);

  // авторизация

  function handleAuthorization(data) {
    setIsLoadingSignin(true);
    auth
      .authorize(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          setCurrentUser(res);
          setSuccessText("Авторизация прошла успешно");
          setIsSuccess(true);
          handleInfoTooltipOpen(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        setUnsuccessText(
          "Что-то пошло не так! Попробуйте авторизоваться ещё раз."
        );
        handleInfoTooltipOpen();
        console.log(err);
      })
      .finally(() => setIsLoadingSignin(false));
  }

  // регистрация

  function handleRegistration(data) {
    setIsLoadingSignup(true);
    auth
      .register(data)
      .then((res) => {
        if (res) {
          handleAuthorization(data);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
        handleInfoTooltipOpen();
        setUnsuccessText(
          "Что-то пошло не так! Попробуйте зарегистрироваться ещё раз."
        );
      })
      .finally(() => setIsLoadingSignup(false));
  }

  // логаут

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("saveMovies");
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    history.push("/");
  };

  // обновление данных пользователя

  const updateUserInfo = (user) => {
    setIsLoading(true);
    mainApi
      .updateUserInfo(user)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        setIsSuccess(false);
        handleInfoTooltipOpen();
        setUnsuccessText("Что-то пошло не так! Попробуйте ещё раз.");
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  // добавление фильма в savedMovies
  const addMovie = (movie) => {
    setIsLoading(true);
    mainApi
      .createNewMovie(movie)
      .then((res) => {
        if (!savedMovies.message) {
          setSavedMovies([...savedMovies, res]);
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
        } else {
          setSavedMovies(res);
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  // удаление фильма из сохранённых (по клику на странице SavedMovies)
  const deleteMoviefromSavedPage = (movie) => {
    setIsLoading(true);
    const movieId = savedMovies.find(
      (item) => item.movieId === movie.movieId
    )._id;

    mainApi
      .deleteMovie(movieId)
      .then(() => {
        const newArr = savedMovies.filter((item) => item._id !== movieId);
        setSavedMovies(newArr);
        localStorage.setItem("savedMovies", JSON.stringify(newArr));
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  // удаление фильма из сохранённых (по клику на странице Movies)
  const deleteMovieFromMoviesPage = (movie) => {
    setIsLoading(true);
    const movieId = savedMovies.filter((item) => item.movieId === movie.id)[0]
      ._id;

    mainApi
      .deleteMovie(movieId)
      .then(() => {
        const newArr = savedMovies.filter((item) => item._id !== movieId);
        setSavedMovies(newArr);
        localStorage.setItem("savedMovies", JSON.stringify(newArr));
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  // добавлен ли  фильм в сохранённые
  const isAddedMovie = (movie) => {
    if (!savedMovies.message && movie) {
      return savedMovies.some((item) => {
        // console.log(`isAdded item.id: ${item.movieId}, movie.id: ${movie.id}`)
        return item.movieId === movie.id;
      });
    }
  };

  // добавление или удаление фильма по лайку в зависимости от того, добавлен он или нет
  const handleAddOrDeleteMovie = (movie, isAdded) => {
    !isAdded ? addMovie(movie) : deleteMovieFromMoviesPage(movie);
  };

  // открытие и закрытие модального окна
  function handleInfoTooltipOpen() {
    setIsInfoTooltipOpen(true);
  }

  function closePopup() {
    setIsInfoTooltipOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Route strict path="/(movies|saved-movies|profile)">
          <Header loggedIn={loggedIn} />
        </Route>

        <Switch>
          <Route exact path="/">
            <div className="page">
              <Main loggedIn={loggedIn} />
            </div>
          </Route>

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
            handleAddOrDeleteMovie={handleAddOrDeleteMovie}
            isAddedMovie={isAddedMovie}
            isLoading={isLoading}
          ></ProtectedRoute>

          <ProtectedRoute
            loggedIn={loggedIn}
            path="/saved-movies"
            component={SavedMovies}
            savedMovies={savedMovies}
            deleteMovie={deleteMoviefromSavedPage}
            isAddedMovie={isAddedMovie}
            isLoading={isLoading}
          ></ProtectedRoute>

          <ProtectedRoute
            loggedIn={loggedIn}
            logout={handleLogout}
            path="/profile"
            component={Profile}
            updateUserInfo={updateUserInfo}
            isLoading={isLoading}
          ></ProtectedRoute>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closePopup}
          isSuccess={isSuccess}
          successText={successText}
          unSuccessText={unsuccessText}
        />

        <Route strict path="/(|movies|saved-movies)">
          <Footer loggedIn={loggedIn} />
        </Route>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
