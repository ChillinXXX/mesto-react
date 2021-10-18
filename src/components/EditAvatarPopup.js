import React from "react";
import PopupWithForm from "./PopupWithForm";
import { buttonText } from '../utils/constants.js';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {

  //Создаем указатель Ref на DOM элемент инпут формы с аватаром
  const updateAvatar = React.useRef();
  //Очищаем инпут
  React.useEffect(() => {
    updateAvatar.current.value = '';
  }, [isOpen]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateAvatar({ link: updateAvatar.current.value });
  }

  return (
    <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isOpen} buttonTextContent={buttonText.save} onClose={onClose} onSubmit={handleSubmit}>
      <div className="popup__field">
        <input ref={updateAvatar} type="url" className="popup__input popup__input_el_link-avatar" id="link-avatar" name="link" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error link-avatar-error" />
      </div>
    </PopupWithForm>
  );

}

export default EditAvatarPopup;
