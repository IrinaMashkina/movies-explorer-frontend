import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__movies">
        <Link className="navigation__link" to="#">
          Фильмы
        </Link>
        <Link className="navigation__link" to="#">
          Сохранённые фильмы
        </Link>
      </ul>

      <div className="navigation__profile">
        <p className="navigation__profile-text">Аккаунт</p>
        <Link className="navigation__icon" to="#"></Link>
      </div>
    </nav>
  );
}

export default Navigation;
