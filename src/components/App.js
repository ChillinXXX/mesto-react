import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

const App = () => {

  //Переменные useState:
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isPreviewPopupOpen, setPreviewPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  //Функция: Закрытие попаов и сброс значений
  const closeAllPopups = (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button_el_close')) {
      setEditProfilePopupOpen(false);
      setEditAvatarPopupOpen(false);
      setAddPlacePopupOpen(false);
      setPreviewPopupOpen(false);
      setSelectedCard({});
    }
  }

  //Хендл: Записываем в переменную useState значение кликанутой карточки
  const handleCardClick = (evt) => {
    setSelectedCard(evt.target);
    setPreviewPopupOpen(true);
  }

  //Хендл: Закрытие попапов по клику кнопки Close или фону попапа
  /*const handleClosePopup = (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button_el_close')) {
      closeAllPopups();
    }
  }*/

   //Хендл: Записываем в переменную useState значение true для передачи в компонент PopupWithForm с аватаром
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }

  //Хендл: Записываем в переменную useState значение true для передачи в компонент PopupWithForm с пофилем
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  //Хендл: Записываем в переменную useState значение true для передачи в компонент PopupWithForm сдобавлением карточки
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }

  return (
    <>
      <Header />

      <Main
        onEditProfile  = { handleEditProfileClick }
        onEditAvatar   = { handleEditAvatarClick }
        onAddPlace     = { handleAddPlaceClick }
        onCardClick    = { handleCardClick } />

      <Footer />

      <PopupWithForm name={'info'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__fieldset">
          <div className="popup__field">
            <input type="text" className="popup__input popup__input_el_name" id="name" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
            <span className="popup__input-error name-error" />
          </div>
          <div className="popup__field">
            <input type="text" className="popup__input popup__input_el_about" id="about" name="about" placeholder="О себе" required minLength={2} maxLength={200} />
            <span className="popup__input-error about-error" />
          </div>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__fieldset">
          <div className="popup__field">
            <input type="url" className="popup__input popup__input_el_link-avatar" id="link-avatar" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-avatar-error" />
          </div>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name={'addCard'} title={'Новое место'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__fieldset">
          <div className="popup__field">
            <input type="text" className="popup__input popup__input_el_name-card" id="name-card" name="name" placeholder="Название" required minLength={2} maxLength={30} />
            <span className="popup__input-error name-card-error" />
          </div>
          <div className="popup__field">
            <input type="url" className="popup__input popup__input_el_link-card" id="link-card" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-card-error" />
          </div>
        </fieldset>
      </PopupWithForm>

      <ImagePopup card = { selectedCard } isOpen = { isPreviewPopupOpen } onClose = { closeAllPopups } />

      <PopupWithForm name={'delete-card'} title={'Вы уверены?'} />

      <template id="card" />
    </>
  );
}

export default App;
