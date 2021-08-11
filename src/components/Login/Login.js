import React from "react";
import Sign from "../Sign/Sign";
import { Link } from "react-router-dom";

function Login() {
  const link = (
    <p className="login-form__question">
      Ещё не зарегистрированы?
      <Link className="login-form__link" to="/sign-up">
        Регистрация
      </Link>
    </p>
  );

  return (
    <Sign title="Рады видеть!" buttonText="Войти" link={link}>
      <section className="login-form">
        <section className="login-form__section">
          <label htmlFor="email" className="login-form__label">
            E-mail
          </label>
          <input
            id="email"
            className="login-form__input"
            name="email"
            type="email"
            required
            minLength="2"
            maxLength="40"
          ></input>
          <span className="login-form__input-error">
            Ошибка
          </span>
        </section>
        <section className="login-form__section">
          <label htmlFor="password" className="login-form__label">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            minLength="2"
            maxLength="40"
            className="login-form__input"
          ></input>
          <span className="login-form__input-error">
            Ошибка
          </span>
        </section>
      </section>
    </Sign>
  );
}

export default Login;
