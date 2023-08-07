import React, { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailInputValue = (e) => {
    setEmail(e.target.value);
  };

  const passwordInputValue = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin(password, email);
  };

  return (
    <section className="login-register">
      <h2 className="login-register__title">Вход</h2>
      <form className="login-register__form" onSubmit={handleSubmit}>
        <input
          className="login-register__input"
          placeholder="E-mail"
          type="e-mail"
          onChange={emailInputValue}
        />
        <input
          className="login-register__input"
          placeholder="Пароль"
          type="password"
          onChange={passwordInputValue}
        />
        <button className="login-register__submit-btn">Войти</button>
      </form>
    </section>
  );
}

export default Login;
