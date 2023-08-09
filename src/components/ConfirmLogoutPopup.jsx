import PopupWithForm from "./PopupWithForm";

function ConfirmLogoutPopup({ isOpen, onClose, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="logout-confirm"
      isOpen={isOpen}
      onClose={onClose}
      textBtnSave="Да"
      onSubmit={handleSubmit}
    />
  );
}

export default ConfirmLogoutPopup;
