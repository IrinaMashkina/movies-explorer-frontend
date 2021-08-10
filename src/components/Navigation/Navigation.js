import React from "react";
import { Link } from "react-router-dom";
const windowSize = window.innerWidth;

function Navigation() {
  return (
    <nav className="navigation">
      {windowSize > 1000 && (
        <>
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
        </>
      )}
      {windowSize <= 1000 && (
        <>
          <button
            className="navigation__hamburger-menu"
            type="button"
          >
            <div className="navigation__hamburger-menu-line"></div>
          </button>
        </>
      )}
    </nav>
  );
}

export default Navigation;
