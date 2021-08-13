import React from "react";
import { Link, useHistory } from "react-router-dom";


function NotFound() {

  const history = useHistory();

  function handleBackClick() {
    history.goBack();
  }



  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <Link onClick={handleBackClick} className="not-found__link">Назад</Link>
    </section>
  );
}

export default NotFound;
