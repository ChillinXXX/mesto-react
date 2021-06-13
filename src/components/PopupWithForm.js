import React from 'react';

const PopupWithForm = ({ name, title, isOpen, onClose, children }) => {
  return (
    <div onClick={onClose} className={isOpen ? `popup popup_el_${name} popup_opened` : `popup popup_el_${name}`}>
      <form className="popup__form" name={name}>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button className="popup__button popup__button_el_save" type="submit">Сохранить</button>
        <button onClick={onClose} className="popup__button popup__button_el_close" type="reset" />
      </form>
    </div>
  )
}
export default PopupWithForm
