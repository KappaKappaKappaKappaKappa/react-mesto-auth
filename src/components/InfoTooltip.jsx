import successRegister from "../images/success-register.svg";
import errorRegister from "../images/error-register.svg";

function InfoTooltip({ isConfirmed, isOpen, onClose }) {
  return (
    <section className={`pop-up ${isOpen ? "pop-up_opened" : ""}`}>
      <div className="pop-up__container">
        <form className="pop-up__form">
          <div className="pop-up__tooltip-container">
            <img
              className="pop-up__tooltip-img"
              src={isConfirmed ? successRegister : errorRegister}
            />
            <h2 className="pop-up__tooltip-title">
              {isConfirmed
                ? "Вы успешно зарегистрировались!"
                : "Что-то пошло не так! Попробуйте ещё раз."}
            </h2>
          </div>
        </form>
        <button className="pop-up__button-close" onClick={onClose}></button>
      </div>
    </section>
  );
}

export default InfoTooltip;
