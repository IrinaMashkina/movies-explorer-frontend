import React from "react";
import Sign from "../Sign/Sign";
import { Link } from "react-router-dom";
import FormValidator from "../../hooks/useFormValidator";

function Login({onAuthotization, isLoading}) {
  const { inputValues, errorMessages, isValid, handleInputChange, resetForm } =
    FormValidator({});

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuthotization(inputValues);
  };

  const link = (
    <p className="login-form__question">
      Ещё не зарегистрированы?
      <Link className="login-form__link" to="/signup">
        Регистрация
      </Link>
    </p>
  );

  return (
    <Sign
      onSubmit={handleSubmit}
      isValid={isValid}
      isLoading={isLoading}
      title="Рады видеть!"
      buttonText="Войти"
      link={link}
    >
      <section className="login-form">
        <section className="login-form__section">
          <label htmlFor="email" className="login-form__label">
            E-mail
          </label>
          <input
            id="email"
            className={
              isValid
                ? "login-form__input"
                : "login-form__input login-form__input_type_error"
            }
            name="email"
            type="email"
            required
            minLength="2"
            maxLength="40"
            onChange={handleInputChange}
            value={inputValues.email ? inputValues.email : ""}
          ></input>
          <span
            className={
              isValid
                ? "login-form__span-error"
                : "login-form__span-error login-form__span-error_active"
            }
          >
            {errorMessages.email}
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
            minLength="5"
            maxLength="40"
            value={inputValues.password ? inputValues.password : ""}
            onChange={handleInputChange}
            className={
              isValid
                ? "login-form__input"
                : "login-form__input login-form__input_type_error"
            }
          ></input>
          <span
            className={
              isValid
                ? "login-form__span-error"
                : "login-form__span-error login-form__span-error_active"
            }
          >
            {errorMessages.password}
          </span>
        </section>
      </section>
    </Sign>
  );
}

export default Login;
