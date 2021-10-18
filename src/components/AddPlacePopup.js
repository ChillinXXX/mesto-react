import React from "react";
import PopupWithForm from "./PopupWithForm";
import { buttonText } from '../utils/constants.js';

const AddPlacePopup = ({ name, link, isOpen, onClose, onSetName, onSetLink, onAddPlace }) => {

    React.useEffect(() => {
        onSetName('');
        onSetLink('');
    }, [isOpen]);

    const handleCardName = (evt) => {
        onSetName(evt.target.value);
    }

    const handleCardLink = (evt) => {
        onSetLink(evt.target.value);
    }

    return (
            <PopupWithForm name={'addCard'} title={'Новое место'} buttonTextContent={buttonText.create} isOpen={isOpen} onClose={onClose} onSubmit = { onAddPlace }>
                <div className="popup__field">
                    <input type="text" className="popup__input popup__input_el_name-card" id="name-card" name="name" placeholder="Название" required minLength={2} maxLength={30} value = { name } onChange={ handleCardName } />
                    <span className="popup__input-error name-card-error" />
                </div>
                <div className="popup__field">
                    <input type="url" className="popup__input popup__input_el_link-card" id="link-card" name="link" placeholder="Ссылка на картинку" required value = { link } onChange={ handleCardLink } />
                    <span className="popup__input-error link-card-error" />
                </div>
            </PopupWithForm>
    )
}
export default AddPlacePopup;