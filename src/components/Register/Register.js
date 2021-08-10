import Sign from "../Sign/Sign";
import { Link } from "react-router-dom";

function Register() {
  const link = (
    <p className="form__question">
      Уже зарегистрированы?
      <Link className="form__link" to="/sign-in">
        Войти
      </Link>
    </p>
  );

  return (
    <Sign title="Добро пожаловать!" buttonText="Зарегистрироваться" link={link}>
      <section className="form__section">
        <label for="name" className="form__label">
          Имя
        </label>
        <input type="input" id="name" className="form__input"></input>
        <label forHtml="email" className="form__label">
          E-mail
        </label>
        <input type="input" id="email" className="form__input"></input>
        <label forHtml="password" className="form__label">
          Пароль
        </label>
        <input type="input" id="password" className="form__input"></input>
      </section>
    </Sign>
  );
}

export default Register;
