import React from "react";
import FormValidator from "../../hooks/useFormValidator";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const {
    setInputValues,
    inputValues,
    isValid,
    handleInputChange,
    errorMessages,
    resetForm
  } = FormValidator({});

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    resetForm();
  }, [resetForm]); 

  React.useEffect(() => {
    setInputValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser.email, currentUser.name, setInputValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <h2 className="profile__title">Привет, {currentUser.name}</h2>

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
                placeholder={currentUser.name}
                autoComplete="off"
              />

            </div>

            <span
                className={
                  isValid
                    ? "profile__span-error"
                    : "profile__span-error profile__span-error_active"
                }
              >
                {errorMessages.name}
              </span>

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
                value={inputValues.email || ""}
                onChange={handleInputChange}
                className="profile__input"
                placeholder={currentUser.email}
                autoComplete="off"
              />

            </div>
            <span
                className={
                  isValid
                    ? "profile__span-error"
                    : "profile__span-error profile__span-error_active"
                }
              >
                {errorMessages.email}
              </span>
          </section>
        </div>
        <div className="profile__buttons">
          <button
            type="submit"
            className={
              !isValid || inputValues.name.length === 0 || inputValues.email.length === 0
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
