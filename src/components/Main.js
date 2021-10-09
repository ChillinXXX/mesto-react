import React from 'react';
import api from '../utils/api.js';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

const Main = ({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) => {

  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);


  //При перевой загрузке страницы делаем API запрос данных карточек и записывае в значения переменных useState
  React.useEffect(() => {
    api.getInitialCardList()
      .then((result) => {
        setCards(result);
      })
      .catch((error) => alert(`Что-то пошло не так=( ${error}`));
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div onClick={onEditAvatar} className="profile__edit-avatar">
          <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
        </div>
        <div className="info">
          <div className="info__conteiner">
            <h1 className="info__user-name">{currentUser.name}</h1>
            <button onClick={onEditProfile} className="info__button-info" type="button" />
          </div>
          <p className="info__user-description">{currentUser.about}</p>
        </div>
        <button onClick={onAddPlace} className="profile__button-add" type="button" />
      </section>
      <section className="cards-section">
        <ul className="cards">
          {cards.map(({ name, link, likes, _id }) => (
            <Card key = { _id } name = { name } link = { link } likes = { likes } onCardClick = { onCardClick }/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main
