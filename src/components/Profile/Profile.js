import React from "react";

function Profile(props) {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, имя_пользователя</h2>
      <div className="profile__info">
        <div className="profile__info-container">
          <p className="profile__info-title">Имя</p>
          <p className="profile__info-text">имя_пользователя</p>
        </div>

        <div className="profile__info-container">
          <p className="profile__info-title">E-mail</p>
          <p className="profile__info-text">email_пользователя</p>
        </div>
      </div>
      <div className="profile__buttons">
        <button type="button" className="profile__button-edit">
          Редактировать
        </button>
        <button type="button" className="profile__button-exit">
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
