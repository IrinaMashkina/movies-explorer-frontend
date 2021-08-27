import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <ul className="navigation__movies">
          <li className="navigation__item">
            <NavLink
              activeClassName="navigation__link_active"
              className={props.textColor ? `navigation__link ${props.textColor}` : "navigation__link"}
              to="/movies"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              activeClassName="navigation__link_active"
              className={props.textColor ? `navigation__link ${props.textColor}` : "navigation__link"}
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>

        <li className="navigation__profile">
          <NavLink
            activeClassName="navigation__link_active"
            className={props.textColor ? `navigation__link navigation__link_place_profile ${props.textColor}` : "navigation__link navigation__link_place_profile"}
            to="/profile"
          >
            Аккаунт
          </NavLink>
          <div className="navigation__icon"></div>
        </li>
      </ul>

      <HamburgerMenu />
    </nav>
  );
}

export default Navigation;
