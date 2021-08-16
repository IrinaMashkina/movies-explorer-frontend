import React from "react";
import { NavLink } from "react-router-dom";

function PopupMenu(props) {
  return (
    <section
      className={`popup-menu ${props.isOpen ? "popup-menu_opened" : ""}`}
    >
      <div className="popup-menu__container">
        <button
          onClick={props.toggleMenu}
          type="button"
          className="popup-menu__close"
        ></button>
        <ul className="popup-menu__list">
          <ul className="popup-menu__list_nav">
            <li className="popup-menu__item">
              <NavLink
                activeClassName="popup-menu__link_active"
                className="popup-menu__link"
                exact
                to="/"
              >
                Главная
              </NavLink>
            </li>

            <li className="popup-menu__item">
              <NavLink
                activeClassName="popup-menu__link_active"
                className="popup-menu__link"
                to="/movies"
              >
                Фильмы
              </NavLink>
            </li>

            <li className="popup-menu__item">
              <NavLink
                activeClassName="popup-menu__link_active"
                className="popup-menu__link"
                to="/saved-movies"
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>

          <li className="popup-menu__profile">
            <NavLink
              activeClassName="popup-menu__link_active"
              className="popup-menu__link popup-menu__link_place_profile"
              to="/profile"
            >
              Аккаунт
            </NavLink>
            <div className="popup-menu__icon"></div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default PopupMenu;
