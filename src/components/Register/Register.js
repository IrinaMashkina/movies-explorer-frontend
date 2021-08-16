import React from "react";
import Sign from "../Sign/Sign";
import { Link } from "react-router-dom";

function Register() {
  const link = (
    <p className="register-form__question">
      Уже зарегистрированы?
      <Link className="register-form__link" to="/sign-in">
        Войти
      </Link>
    </p>
  );

  return (
    <Sign title="Добро пожаловать!" buttonText="Зарегистрироваться" link={link}>
      <section className="register-form">
        <section className="register-form__section">
          <label htmlFor="name" className="register-form__label">
            Имя
          </label>
          <input
            id="name"
            className="register-form__input"
            name="text"
            type="text"
            required
            minLength="2"
            maxLength="40"
          ></input>
          <span className="register-form__input-error">
            Что-то пошло не так...
          </span>
        </section>

        <section className="register-form__section">
          <label htmlFor="email" className="register-form__label">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            minLength="2"
            maxLength="40"
            className="register-form__input"
          ></input>
          <span className="register-form__input-error">
            Что-то пошло не так...
          </span>
        </section>
        <section className="register-form__section">
          <label htmlFor="password" className="register-form__label">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            className="register-form__input"
            name="password"
            required
            minLength="2"
            maxLength="40"
          ></input>
          <span className="register-form__input-error">
            Что-то пошло не так...
          </span>
        </section>
      </section>
    </Sign>
  );
}

export default Register;
