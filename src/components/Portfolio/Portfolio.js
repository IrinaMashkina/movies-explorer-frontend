function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <p className="potrfolio__item-name">Статичный сайт</p>
          <a
            className="portfolio__link"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            🡥
          </a>
        </li>
        <li className="portfolio__item">
          <p className="potrfolio__item-name">Адаптивный сайт</p>
          <a
            className="portfolio__link"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            🡥
          </a>
        </li>
        <li className="portfolio__item">
          <p className="potrfolio__item-name">Одностраничное приложение</p>
          <a
            className="portfolio__link"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            🡥
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
