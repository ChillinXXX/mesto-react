import React from 'react';

const PopupWithForm = ({elemClass, elemTitle, children}) => {
return (
  <div className={`popup popup_el_${elemClass}`}>
        <form className="popup__form" name={elemClass}>
          <h2 className="popup__title">{elemTitle}</h2>
          {children}
          <button className="popup__button popup__button_el_save" type="submit">Сохранить</button>
          <button className="popup__button popup__button_el_close" type="reset" />
        </form>
      </div>
)
}
export default PopupWithForm
