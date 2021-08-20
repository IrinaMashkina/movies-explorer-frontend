import React from "react";
import FormValidator from "../../hooks/useFormValidator";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const { setInputValues, inputValues, isValid, handleInputChange, errorMessages } = FormValidator({});

  const currentUser = React.useContext(CurrentUserContext);

React.useEffect(() => {
setInputValues({
  name: currentUser.name,
  email: currentUser.email,
})
}, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
    props.updateUserInfo(inputValues);
  };

  return (
    <section className="profile">
      <form
        className="profile__container forms"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="profile__info">
          <h2 className="profile__title">Привет, {props.name}</h2>

          <section className="profile__form">
            <div className="profile__info-container">
              <label htmlFor="name" className="profile__info-title">
                Имя
              </label>
              <input
                name="name"
                type="text"
                minLength="2"
                maxLength="40"
                value={inputValues.name || ""}
                onChange={handleInputChange}
                className="profile__input"
                placeholder={props.name}
                autoComplete="off"
              />
              <span className="profile__span-error">{errorMessages.name}</span>
            </div>

            <div className="profile__info-container">
              <label htmlFor="email" className="profile__info-title">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                minLength="2"
                maxLength="40"
                value={inputValues.email || "" }
                onChange={handleInputChange}
                className="profile__input"
                placeholder={props.email}
                autoComplete="off"
              />
               <span className="profile__span-error">{errorMessages.name}</span>
            </div>
          </section>
        </div>
        <div className="profile__buttons">
          <button
            type="submit"
            className={
              !isValid
                ? "profile__button-edit profile__button-edit_disabled"
                : "profile__button-edit"
            }
          >
            Редактировать
          </button>
          <button
            onClick={props.logout}
            type="button"
            className="profile__button-exit"
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
