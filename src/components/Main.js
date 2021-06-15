import React from 'react';
import avatar from '../images/image-avatar.jpg';
import api from '../utils/Api';
import Card from './Card';

const Main = ({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) => {
  
  //Переменные useState:
  const [userName, setUserName] = React.useState('Имя пользователя');
  const [userDescription, setUserDescription] = React.useState('О себе');
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);

  //При перевой загрузке страницы делаем API запрос данных пользователей и записывае в значения переменных useState
  React.useEffect(() => {
    api.getUserInfo()
      .then((result) => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
      .catch((error) => alert(`Что-то пошло не так=( ${error}`));
  }, [])

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
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
        </div>
        <div className="info">
          <div className="info__conteiner">
            <h1 className="info__user-name">{userName}</h1>
            <button onClick={onEditProfile} className="info__button-info" type="button" />
          </div>
          <p className="info__user-description">{userDescription}</p>
        </div>
        <button onClick={onAddPlace} className="profile__button-add" type="button" />
      </section>
      <section className="cards-section">
        <ul className="cards">
          {cards.map(({ name, link, likes, _id }) => (
            <Card key = { _id } isNameCard = { name } isLinkCard = { link } isLikesCard = { likes } onCardClick = { onCardClick }/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main
