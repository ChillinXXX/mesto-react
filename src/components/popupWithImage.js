import React from 'react';

 const PopupWithImage = ({card, isOpen, onClose }) => {
  return (
    <div onClick={onClose} className={!isOpen ? 'popup popup_el_preview' : 'popup popup_el_preview popup_opened'}>
        <figure className="popup__figure">
          <button onClick={onClose} className="popup__button popup__button_el_close" />
          <img className="popup__image" src={card.isLinkCard} alt={card.isNameCard} />
          <figcaption className="popup__figcaption">{card.isNameCard}</figcaption>
        </figure>
      </div>
  );
}

export default PopupWithImage
