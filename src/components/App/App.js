import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/movies">
          <div className="page">
            <Header />
            <Movies />
            <Footer />
          </div>
        </Route>
        <Route path="/saved-movies">
          <div className="page">
            <Header />
            <SavedMovies />
            <Footer />
          </div>
        </Route>
        <Route path="/profile">
          <div className="page">
            <Header />
            <Profile />
          </div>
        </Route>
        <Route exact path="/">
          <div className="page">
            <Main />
            <Footer />
          </div>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
