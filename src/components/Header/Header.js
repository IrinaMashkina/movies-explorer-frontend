import logo from "../../images/logo-min.svg";
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img className="logo" alt="Логотип." src={logo} />
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;
