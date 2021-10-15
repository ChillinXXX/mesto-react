import React from 'react';

const PopupWithForm = ({ name, title, buttonTextContent, isOpen, onClose, children, onSubmit }) => {
  //const popupOpened = isOpen ? `popup_opened` : '';
  return (
    <div onClick={onClose} className={`popup popup_el_${name} ${ isOpen ? 'popup_opened' : '' }`}>
      <form className="popup__form" name={name} onSubmit = { onSubmit }>
        <h2 className="popup__title">{title}</h2>
        <fieldset className="popup__fieldset">
          {children}
        </fieldset>
        <button className="popup__button popup__button_el_save" type="submit">{buttonTextContent}</button>
        <button onClick={onClose} className="popup__button popup__button_el_close" type="reset" />
      </form>
    </div>
  )
}
export default PopupWithForm
