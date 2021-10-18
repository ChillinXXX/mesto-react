import React from "react";
import PopupWithForm from "./PopupWithForm";
import { buttonText } from '../utils/constants.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

const EditProfilePopup = ({ name, about, isOpen, onClose, onSetUserName, onSetUserAbout, onUpdateUser }) => {

  //Подписка на провайдера контекста данных текущего пользователя
  const currentUser = React.useContext(CurrentUserContext);

  //Помещаем сетеры в функции обратного вызова
  const handleChacgeName = (evt) => {
    onSetUserName(evt.target.value);
  }

  const handleChangeDescription = (evt) => {
    onSetUserAbout(evt.target.value);
  }

  //Используем данные API для задания имени и описания пользователя и подписываемся на обновление переменной currentUser
  React.useEffect(() => {
    onSetUserName(currentUser.name);
    onSetUserAbout(currentUser.about);
  }, [currentUser, isOpen])

  return (
      <PopupWithForm name={'info'} title={'Редактировать профиль'} buttonTextContent={buttonText.save} isOpen={isOpen} onClose={onClose} onSubmit={ onUpdateUser }>
        <div className="popup__field">
          <input type="text" className="popup__input popup__input_el_name" id="name" name="name" placeholder="Имя" required minLength={2} maxLength={40} value = { name } onChange={handleChacgeName} />
          <span className="popup__input-error name-error" />
        </div>
        <div className="popup__field">
          <input type="text" className="popup__input popup__input_el_about" id="about" name="about" placeholder="О себе" required minLength={2} maxLength={200} value = { about } onChange={handleChangeDescription} />
          <span className="popup__input-error about-error" />
        </div>
      </PopupWithForm>
  );
}

export default EditProfilePopup;
