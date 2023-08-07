import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInputValue = (e) => {
    setEmail(e.target.value);
  };

  const passwordInputValue = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(password, email);
  };
  return (
    <section className="login-register">
      <h2 className="login-register__title">Регистрация</h2>
      <form className="login-register__form" onSubmit={handleSubmit}>
        <input
          className="login-register__input"
          placeholder="E-mail"
          onChange={emailInputValue}
          type="e-mail"
        />
        <input
          className="login-register__input"
          placeholder="Пароль"
          onChange={passwordInputValue}
          type="password"
        />
        <button className="login-register__submit-btn">
          Зарегистрироваться
        </button>
        <p className="login-register__already-title">
          Уже зарегестрированы?{" "}
          <Link to="/sign-in" className="login-register__already-login">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
