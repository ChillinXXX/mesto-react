import React from 'react';

 const ImagePopup = ({ card, isOpen, onClose }) => {
  return (
    <div onClick = { onClose } className = { !isOpen ? 'popup popup_el_preview' : 'popup popup_el_preview popup_opened' }>
        <figure className="popup__figure">
          <button onClick = { onClose } className="popup__button popup__button_el_close" />
          <img className="popup__image" src={ card.link } alt = { card.name } />
          <figcaption className="popup__figcaption">{ card.name }</figcaption>
        </figure>
      </div>
  );
}

export default ImagePopup
