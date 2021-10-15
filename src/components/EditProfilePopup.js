import React from "react";
import PopupWithForm from "./PopupWithForm";
import { buttonText } from '../utils/constants.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import api from "../utils/api";

const EditProfilePopup = ({ isOpen, onClose, setCurrentUserData, onClosePopup }) => {

  //Подписка на провайдера контекста данных текущего пользователя
  const currentUser = React.useContext(CurrentUserContext);

  //Задаем сетеры для упраления состоянием из инпутов
  const [name, setName] = React.useState('user');
  const [description, setDescription] = React.useState('about user');

  //Помещаем сетеры в функции обратного вызова
  const handleChacgeName = (evt) => {
    setName(evt.target.value);
  }

  const handleChangeDescription = (evt) => {
    setDescription(evt.target.value);
  }

  //Хендл по событию Submit формы
  const handleSubmit = (evt) => {
    evt.preventDefault();
    api.setUserInfo(
      {
        name: name,
        about: description
      }
    )
      .then((userData) => { setCurrentUserData(userData) })
      .catch((error) => { console.log(`Ошибка запроса API: ${error}`) });
    onClosePopup();
  }

  //Используем данные API для задания имени и описания пользователя и подписываемся на обновление переменной currentUser
  React.useEffect(() => {
    setName(currentUser);
    setDescription(currentUser);
  }, [currentUser])

  return (
    <>
      <PopupWithForm name={'info'} title={'Редактировать профиль'} buttonTextContent={buttonText.save} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
        <div className="popup__field">
          <input type="text" className="popup__input popup__input_el_name" id="name" name="name" placeholder="Имя" required minLength={2} maxLength={40} onChange={handleChacgeName} />
          <span className="popup__input-error name-error" />
        </div>
        <div className="popup__field">
          <input type="text" className="popup__input popup__input_el_about" id="about" name="about" placeholder="О себе" required minLength={2} maxLength={200} onChange={handleChangeDescription} />
          <span className="popup__input-error about-error" />
        </div>
      </PopupWithForm>
    </>
  );
}

export default EditProfilePopup;
