import React from "react";
import api from "../utils/api";
import PopupWithForm from "./PopupWithForm";
import { buttonText } from '../utils/constants.js';

const EditProfilePopup = ({ isOpen, onClose, setCurrentUserData, onClosePopup }) => {
  const updateAvatar = React.useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log(updateAvatar.current.value);
    api.setUserAvatar({ link: updateAvatar.current.value })
      .then((userData) => { setCurrentUserData(userData) })
      .catch((error) => { console.log(`Ошибка запроса API: ${error}`) });
    onClosePopup();
  }

  return (
    <>
      <PopupWithForm name={ 'avatar' } title={ 'Обновить аватар' } isOpen={ isOpen } buttonTextContent={ buttonText.save } onClose={ onClose } onSubmit={ handleSubmit }>
        <div className="popup__field">
          <input ref={updateAvatar} type="url" className="popup__input popup__input_el_link-avatar" id="link-avatar" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error link-avatar-error" />
        </div>
      </PopupWithForm>
    </>
  );

}

export default EditProfilePopup;
