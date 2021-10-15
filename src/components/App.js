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
import AddPlacePopup from './AddPlacePopup.js'

const App = () => {

  //Создание переменных useState для управления состоянием DOM элементов: Сэтеры-XY-етеры
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen]   = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen]       = React.useState(false);
  const [isPreviewPopupOpen, setPreviewPopupOpen]         = React.useState(false);
  const [selectedCard, setSelectedCard]                   = React.useState({});

  //Переменная состояния информации пользователя
  const [currentUser, setCurrentUser] = React.useState(defaultUser);
  
  //Переменная состояния массива карточек
  const [cards, setCards] = React.useState([]);

  //При перевой загрузке страницы делаем API запрос данных карточек и записывае в значения переменных useState
  React.useEffect(() => {
    api.getInitialCardList()
      .then((dataCards) => {
        setCards(dataCards);
      })
      .catch((error) => alert(`Что-то пошло не так=( ${error}`));
  }, [])

  //При первой загрузке страницы выполняем запрос данных пользователя с сервера и записываем в переменную currentUser
  React.useEffect(() => {
    api.getUserInfo()
      .then((result) => {
        setCurrentUser(result);
      })
      .catch((error) => alert(`Что-то пошло не так=( ${error}`));
  }, [])

  //Функция обработки лайка/дизлайка карточки
  const handleCardLike = ({ likes, id }) => {
    const isLiked = likes.some(i => i._id === currentUser._id);
    !isLiked ?
              api.setLike(id)
                            .then((dataCard) => {
                              const updateCards = cards.reduce((value, item) => {
                                const length = item._id === id ?  value.push(dataCard) : value.push(item);
                                return value;
                              }, []);
                              setCards(updateCards);
                            })
            : api.deleteLike(id)
                            .then((dataCard) => {
                              const updateCards = cards.reduce((value, item) => {
                                const length = item._id === id ?  value.push(dataCard) : value.push(item);
                                return value;
                              }, []);
                              setCards(updateCards);
                            });
  }

  //Функция обработки удаления карточки
  const handleCardDelete = ({ id }) => {
    api.deleteCard(id)
                    .then((serverResponse) => {
                        //console.log(serverResponse);
                        const updateCards = cards.filter(card => card._id !== id);
                        setCards(updateCards);
                      })
                    .catch((error) => {console.log(`Ошибка запроса API:${error}`)})
  }

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
        cards         = { cards }
        onEditProfile = { handleEditProfileClick }
        onEditAvatar  = { handleEditAvatarClick }
        onAddPlace    = { handleAddPlaceClick }
        onCardClick   = { handleCardClick }
        onCardLikke   = { handleCardLike }
        onCardDelete  = { handleCardDelete } 
      />

      <Footer />

      <EditProfilePopup 
        isOpen             = { isEditProfilePopupOpen } 
        onClose            = { handleClosePopup } 
        setCurrentUserData = { setCurrentUser } 
        onClosePopup       = { closeAllPopups }
      />

      <EditAvatarPopup 
        isOpen             = { isEditAvatarPopupOpen } 
        onClose            = { handleClosePopup } 
        setCurrentUserData = { setCurrentUser } 
        onClosePopup       = { closeAllPopups }
      />

      <AddPlacePopup 
        cards   = { cards }
        isOpen  = { isAddPlacePopupOpen } 
        onClose = { handleClosePopup } 
        onSetCard = { setCards }
        onClosePopup  = { closeAllPopups }
      />
      
      <ImagePopup 
        card    = { selectedCard } 
        isOpen  = { isPreviewPopupOpen } 
        onClose = { handleClosePopup } />

      <PopupWithForm 
        name              = { 'delete-card' } 
        title             = { 'Вы уверены?' } 
        buttonTextContent = { buttonText.approve } 
      />

    </CurrentUserContext.Provider>
  );
}

export default App;
