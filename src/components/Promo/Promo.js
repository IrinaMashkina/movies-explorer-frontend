import logo from "../../images/logo-min.svg";
import { Link } from "react-router-dom";

import NavTab from "../NavTab/NavTab";
import Navigation from "../Navigation/Navigation";

function Promo({ loggedIn }) {
  return (
    <section className="promo">
      {!loggedIn && (
        <header className="promo-header">
          <img className="logo" alt="Логотип." src={logo} />
          <ul className="promo-header__links">
            <Link className="promo-header__link" to="/signup">
              Регистрация
            </Link>
            <Link
              className="promo-header__link promo-header__link_active"
              to="/signin"
            >
              Войти
            </Link>
          </ul>
        </header>
      )}

      {loggedIn && (
        <header className="promo-header">
          <img className="logo" alt="Логотип." src={logo} />
          <Navigation textColor="navigation__link_place_promo"/>
        </header>
      )}

      <div className="promo-title">
        <h1 className="promo-title__text">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>

      <NavTab />
    </section>
  );
}

export default Promo;
