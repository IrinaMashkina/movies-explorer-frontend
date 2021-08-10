import Sign from "../Sign/Sign";
import { Link } from "react-router-dom";

function Login() {
    const link = (
        <p className="form__question">
          Ещё не зарегистрированы?
          <Link className="form__link" to="/sign-up">
             Регистрация
          </Link>
        </p>
      );
    
    return (
        <Sign title="Рады видеть!" buttonText="Войти"  link={link}>
            <section className="login__form-section">
                <label forHtml="email" className="login__form-label">E-mail</label>
                <input type="input" id="email" className="login__form-input"></input>
                <label forHtml="password" className="login__form-label">Пароль</label>
                <input type="input" id="password" className="login__form-input"></input>
            </section>
        </Sign>
    )
}

export default Login;