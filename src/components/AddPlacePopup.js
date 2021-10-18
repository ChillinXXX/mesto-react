import React from "react";
import PopupWithForm from "./PopupWithForm";
import { buttonText } from '../utils/constants.js';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {

  //Переменные состояния для AddPlace
  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');

  React.useEffect(() => {
    setCardName('');
    setCardLink('');
  }, [isOpen]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddPlace({
      name: cardName,
      link: cardLink
    });

  }

  const handleCardName = (evt) => {
    setCardName(evt.target.value);
  }

  const handleCardLink = (evt) => {
    setCardLink(evt.target.value);
  }

  return (
    <PopupWithForm name={'addCard'} title={'Новое место'} buttonTextContent={buttonText.create} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <div className="popup__field">
        <input type="text" className="popup__input popup__input_el_name-card" id="name-card" name="name" placeholder="Название" required minLength={2} maxLength={30} value={cardName} onChange={handleCardName} />
        <span className="popup__input-error name-card-error" />
      </div>
      <div className="popup__field">
        <input type="url" className="popup__input popup__input_el_link-card" id="link-card" name="link" placeholder="Ссылка на картинку" required value={cardLink} onChange={handleCardLink} />
        <span className="popup__input-error link-card-error" />
      </div>
    </PopupWithForm>
  )
}
export default AddPlacePopup;
