import React from "react";
import logo from "../../images/logo-min.svg";
import { Link } from "react-router-dom";

const Sign = (props) => {
  return (
    <main className="sign-page">
      <form className="form">
        <Link className="form__link" to="/">
          <img className="form__logo" src={logo} alt="Логотип" />
        </Link>

        <h2 className="form__title">{props.title}</h2>
        {props.children}
        <button type="submit" className="form__button-submit">
          {props.buttonText}
        </button>
        {props.link && props.link}
      </form>
    </main>
  );
};

export default Sign;
