import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import { buttonText } from '../utils/constants.js';
import api from '../utils/api.js';
import EditProfilePopup from './EditProfilePopup';
import { CurrentUserContext, defaultUser } from '../contexts/CurrentUserContext';
import EditAvatarPopup from './EditAvatarPopup.js';

const App = () => {

  //Переменные useState для управления DOM:
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isPreviewPopupOpen, setPreviewPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});


  ////////////Work this
  const [currentUser, setCurrentUser] = React.useState(defaultUser);

  React.useEffect(() => {
    api.getUserInfo()
      .then((result) => {
        setCurrentUser(result);
      })
      .catch((error) => alert(`Что-то пошло не так=( ${error}`));
  }, [])
  /////////////////


  //Функция: Закрытие попаов и сброс значений
  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setPreviewPopupOpen(false);
    setSelectedCard({});
  }

  //Хендл: Записываем в переменную useState значение кликанутой карточки
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setPreviewPopupOpen(true);
  }

  //Хендл: Закрытие попапов по клику кнопки Close или фону попапа
  const handleClosePopup = (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button_el_close')) {
      closeAllPopups();
    }
  }

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
    <CurrentUserContext.Provider value={currentUser} >

      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick} />

      <Footer />

      <EditProfilePopup isOpen={ isEditProfilePopupOpen } onClose={ handleClosePopup } setCurrentUserData = { setCurrentUser } onClosePopup = { closeAllPopups }/>

      {/* Переносим внутрь компонента EditProfilePopup
      <PopupWithForm name={'info'} title={'Редактировать профиль'} buttonTextContent={buttonText.save} isOpen={isEditProfilePopupOpen} onClose={handleClosePopup}>
        <div className="popup__field">
          <input type="text" className="popup__input popup__input_el_name" id="name" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
          <span className="popup__input-error name-error" />
        </div>
        <div className="popup__field">
          <input type="text" className="popup__input popup__input_el_about" id="about" name="about" placeholder="О себе" required minLength={2} maxLength={200} />
          <span className="popup__input-error about-error" />
        </div>
      </PopupWithForm>
      */}

      <EditAvatarPopup isOpen={ isEditAvatarPopupOpen } onClose={ handleClosePopup } setCurrentUserData = { setCurrentUser } onClosePopup = { closeAllPopups }/>

      {/*
      <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} buttonTextContent={buttonText.save} onClose={handleClosePopup}>
        <div className="popup__field">
          <input type="url" className="popup__input popup__input_el_link-avatar" id="link-avatar" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error link-avatar-error" />
        </div>
      </PopupWithForm>
      */}


      <PopupWithForm name={'addCard'} title={'Новое место'} buttonTextContent={buttonText.create} isOpen={isAddPlacePopupOpen} onClose={handleClosePopup}>
        <div className="popup__field">
          <input type="text" className="popup__input popup__input_el_name-card" id="name-card" name="name" placeholder="Название" required minLength={2} maxLength={30} />
          <span className="popup__input-error name-card-error" />
        </div>
        <div className="popup__field">
          <input type="url" className="popup__input popup__input_el_link-card" id="link-card" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error link-card-error" />
        </div>
      </PopupWithForm>

      <ImagePopup card={selectedCard} isOpen={isPreviewPopupOpen} onClose={handleClosePopup} />

      <PopupWithForm name={'delete-card'} title={'Вы уверены?'} buttonTextContent={buttonText.approve} />

    </CurrentUserContext.Provider>
  );
}

export default App;
