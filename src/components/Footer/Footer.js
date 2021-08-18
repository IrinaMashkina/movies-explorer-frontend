function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">&#169; 2021</p>
        <ul className="footer__links">
          <li>
            <a className="footer__link" href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer">
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/IrinaMashkina" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://m.facebook.com/irina.mashkina.54" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
