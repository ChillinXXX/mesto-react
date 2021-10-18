import React from "react";
import PopupWithForm from "./PopupWithForm";
import { buttonText } from '../utils/constants.js';

const EditProfilePopup = ({ isOpen, onClose, updateAvatar, onUpdateAvatar }) => {

  //Очищаем инпут
  React.useEffect(() => {
    updateAvatar.current.value = '';
  }, [isOpen]);
 
  return (
      <PopupWithForm name={ 'avatar' } title={ 'Обновить аватар' } isOpen={ isOpen } buttonTextContent={ buttonText.save } onClose={ onClose } onSubmit ={ onUpdateAvatar }>
        <div className="popup__field">
          <input ref={updateAvatar} type="url" className="popup__input popup__input_el_link-avatar" id="link-avatar" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error link-avatar-error" />
        </div>
      </PopupWithForm>
  );

}

export default EditProfilePopup;
