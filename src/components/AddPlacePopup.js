import React from "react";
import api from "../utils/api";
import PopupWithForm from "./PopupWithForm";
import { buttonText } from '../utils/constants.js';

const AddPlacePopup = ({ cards, isOpen, onClose, onSetCard, onClosePopup }) => {

    const [cardName, setCardName] = React.useState('Новое место');
    const [cardLink, setCardLink] = React.useState('Введите URL адрес изображения');

    const handleCardName = (evt) => {
        setCardName(evt.target.value);
    }

    const handleCardLink = (evt) => {
        setCardLink(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        api.setNewCard({
            name: cardName,
            link: cardLink
        })
            .then((newCard) => {
                onSetCard([newCard, ...cards]);
                onClosePopup();
            })
            .catch((error) => { console.log(`Ошибка API:${error}`) });

    }

    return (
        <>
            <PopupWithForm name={'addCard'} title={'Новое место'} buttonTextContent={buttonText.create} isOpen={isOpen} onClose={onClose} onSubmit = { handleSubmit }>
                <div className="popup__field">
                    <input type="text" className="popup__input popup__input_el_name-card" id="name-card" name="name" placeholder="Название" required minLength={2} maxLength={30} onChange={handleCardName} />
                    <span className="popup__input-error name-card-error" />
                </div>
                <div className="popup__field">
                    <input type="url" className="popup__input popup__input_el_link-card" id="link-card" name="link" placeholder="Ссылка на картинку" required onChange={handleCardLink} />
                    <span className="popup__input-error link-card-error" />
                </div>
            </PopupWithForm>
        </>
    )
}
export default AddPlacePopup;