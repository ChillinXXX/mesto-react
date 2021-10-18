import React from "react";
import PopupWithForm from "./PopupWithForm";
import { buttonText } from '../utils/constants.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {

  //Подписка на провайдера контекста данных текущего пользователя
  const currentUser = React.useContext(CurrentUserContext);

  //Задаем сетеры для упраления состоянием из инпутов
  const [userName, setUserName] = React.useState('');
  const [userAbout, setUserAbout] = React.useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser({
      name: userName,
      about: userAbout
    });
  }

  //Помещаем сетеры в функции обратного вызова
  const handleChacgeName = (evt) => {
    setUserName(evt.target.value);
  }

  const handleChangeDescription = (evt) => {
    setUserAbout(evt.target.value);
  }

  //Используем данные API для задания имени и описания пользователя и подписываемся на обновление переменной currentUser
  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserAbout(currentUser.about);
  }, [currentUser, isOpen])

  return (
    <PopupWithForm name={'info'} title={'Редактировать профиль'} buttonTextContent={buttonText.save} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <div className="popup__field">
        <input type="text" className="popup__input popup__input_el_name" id="name" name="name" placeholder="Имя" required minLength={2} maxLength={40} value={userName} onChange={handleChacgeName} />
        <span className="popup__input-error name-error" />
      </div>
      <div className="popup__field">
        <input type="text" className="popup__input popup__input_el_about" id="about" name="about" placeholder="О себе" required minLength={2} maxLength={200} value={userAbout} onChange={handleChangeDescription} />
        <span className="popup__input-error about-error" />
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
