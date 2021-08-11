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
        <Route path="/moovies">
          <div className="page">
            <Header />
            <Movies />
            <Footer />
          </div>
        </Route>
        <Route path="/saved-moovies">
          <div className="page">
            <Main />
            <Footer />
          </div>
        </Route>
        <Route path="/profile">
          <div className="page">
            <Header />
            <Profile />
          </div>
        </Route>
        <Route path="/">
          <div className="page">
            <Main />
            <Footer />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
