import React from 'react';

 const PopupWithImage = () => {
  return (
    <div className="popup popup_el_preview">
        <figure className="popup__figure">
          <button className="popup__button popup__button_el_close" />
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__figcaption">#</figcaption>
        </figure>
      </div>
  );
}

export default PopupWithImage
