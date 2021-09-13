import React from "react";
import successIcon from "../../images/successIcon.png";
import notSuccessIcon from "../../images/notSuccessIcon.jpg";


const InfoTooltip = (props) => {
  return (
    <section className={`popup popup_place_infotooltip ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <img
          className="popup__icon"
          src={props.isSuccess ? successIcon : notSuccessIcon}
          alt={
            props.isSuccess
              ? "иконка успешного запроса"
              : "иконка неуспешного запроса"
          }
        />
        <h3 className="popup__title_place_infotooltip">
          {props.isSuccess
            ? props.successText
            : props.unSuccessText}
        </h3>
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close-button"
          aria-label="закрыть"
        />
      </div>
    </section>
  );
};

export default InfoTooltip;

