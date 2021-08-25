import React, { useEffect } from "react";
import Sign from "../Sign/Sign";
import { Link } from "react-router-dom";
import FormValidator from "../../hooks/useFormValidator";

function Register({ onRegistration, isLoading }) {
  const { inputValues, errorMessages, isValid, handleInputChange, resetForm } =
    FormValidator({});

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistration(inputValues);
  };

  const link = (
    <p className="register-form__question">
      Уже зарегистрированы?
      <Link className="register-form__link" to="/signin">
        Войти
      </Link>
    </p>
  );

  return (
    <Sign
      isLoading={isLoading}
      onSubmit={handleSubmit}
      isValid={isValid}
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      link={link}
    >
      <section className="register-form">
        <section className="register-form__section">
          <label htmlFor="name" className="register-form__label">
            Имя
          </label>

          <input
            id="name"
            className={
              !errorMessages.name
                ? "register-form__input"
                : "register-form__input register-form__input_type_error"
            }
            name="name"
            type="text"
            required
            minLength="2"
            maxLength="40"
            value={inputValues.name ? inputValues.name : ""}
            onChange={handleInputChange}
          ></input>

          <span
            className={
              !errorMessages.name
                ? "register-form__span-error"
                : "register-form__span-error register-form__span-error_active"
            }
          >
            {errorMessages.name}
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
            value={inputValues.email ? inputValues.email : ""}
            className={
              !errorMessages.email
                ? "register-form__input"
                : "register-form__input register-form__input_type_error"
            }
            onChange={handleInputChange}
          ></input>

          <span
            className={
              !errorMessages.email
                ? "register-form__span-error"
                : "register-form__span-error register-form__span-error_active"
            }
          >
            {errorMessages.email}
          </span>
        </section>

        <section className="register-form__section">
          <label htmlFor="password" className="register-form__label">
            Пароль
          </label>

          <input
            type="password"
            id="password"
            className={
              !errorMessages.password
                ? "register-form__input"
                : "register-form__input register-form__input_type_error"
            }
            name="password"
            required
            minLength="5"
            maxLength="40"
            value={inputValues.password ? inputValues.password : ""}
            onChange={handleInputChange}
          ></input>

          <span
            className={
              !errorMessages.password
                ? "register-form__span-error"
                : "register-form__span-error register-form__span-error_active"
            }
          >
            {errorMessages.password}
          </span>
        </section>
      </section>
    </Sign>
  );
}

export default Register;
