import logo from "../../images/logo.svg";
import React from "react";

import Navigation from "../Navigation/Navigation";


function Header() {
  return (
    <header className="header">
      <img className="logo" alt="Логотип." src={logo} />
      <Navigation />
    </header>
  );
}

export default Header;
