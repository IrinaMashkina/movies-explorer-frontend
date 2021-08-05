function NavTab() {
  return (
    <nav className="navigation">
      <ul>
        <li className="navigation__item">
          <a className="navigation__link" href="#about-project">
            О проекте
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#techs">
            Технологии
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#student">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
