import avatar from "../../images/avatar.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__columns">
        <div className="about-me__info">
          <p className="about-me__name">Ирина</p>
          <p className="about-me__description">Фронтенд-разработчик, 31 год</p>
          <p className="about-me__text">
            Я живу в городе Уфа, закончила стоматологический факультет БГМУ. У
            меня есть семья: муж и два сына. В 2020 году я решила сменить
            профессию и пошла учиться в Яндекс.Практикум на
            фронтенд-разработчика.
          </p>
          <ul className="about-me__links">
            <li>
              <a
                className="about-me__link"
                href="https://github.com/IrinaMashkina"
                target="_blank" rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a className="about-me__link" href="#" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        
        <div className="about-me__avatar-container">
            <img className="about-me__avatar" src={avatar} alt="Аватар" />
        </div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
 