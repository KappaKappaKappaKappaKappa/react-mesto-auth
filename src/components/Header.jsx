import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";

function Header({ email, onClickLogout }) {
  const location = useLocation();
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      {location.pathname === "/main" && (
        <div className="header__wrapper">
          <p className="header__user-email">{email}</p>
          <p className="header__logout" onClick={onClickLogout}>
            Выйти
          </p>
        </div>
      )}
      {location.pathname === "/sign-in" && (
        <Link className="header__auth-link" to="/sign-up">
          Регистрация
        </Link>
      )}
      {location.pathname === "/sign-up" && (
        <Link className="header__auth-link" to="/sign-in">
          Войти
        </Link>
      )}
    </header>
  );
}

export default Header;
