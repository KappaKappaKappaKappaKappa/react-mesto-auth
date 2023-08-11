function BurgerMenu({ email, onClickLogout, isOpen }) {
  return (
    <div className={`burger-menu ${isOpen ? "burger-menu_active" : ""}`}>
      <div className="burger-menu__container">
        <p className="burger-menu__email">{email}</p>
        <p className="burger-menu__link" onClick={onClickLogout}>
          Выйти
        </p>
      </div>
    </div>
  );
}

export default BurgerMenu;
