import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <section className="promo">
      <header className="promo-header">
        <img className="logo" alt="Логотип." src={logo} />
        <ul className="promo-header__links">
          <Link className="promo-header__link" to="#">
            Регистрация
          </Link>
          <Link className="promo-header__link promo-header__link_acrive" to="#">
            Войти
          </Link>
        </ul>
      </header>
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
