import logo from "../../images/logo.svg";
import React from "react";
// import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип." src={logo} />
      <Navigation />
    </header>
  );
}

export default Header;
