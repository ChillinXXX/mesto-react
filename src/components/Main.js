import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

const Main = ({cards, onEditProfile, onEditAvatar, onAddPlace, onCardClick, onCardLikke, onCardDelete }) => {

  //Подписка на провайдера контекста данных текущего пользователя
  const currentUser = React.useContext(CurrentUserContext);
  
  return (
    <main className="content">
      <section className="profile">
        <div onClick={ onEditAvatar } className="profile__edit-avatar">
          <img src={ currentUser.avatar } alt="Аватар" className="profile__avatar" />
        </div>
        <div className="info">
          <div className="info__conteiner">
            <h1 className="info__user-name">{ currentUser.name }</h1>
            <button onClick={ onEditProfile } className="info__button-info" type="button" />
          </div>
          <p className="info__user-description">{ currentUser.about }</p>
        </div>
        <button onClick={ onAddPlace } className="profile__button-add" type="button" />
      </section>
      <section className="cards-section">
        <ul className="cards">
          {cards.map(({ name, link, likes, owner, _id }) => (
            <Card key={ _id } id = { _id } owner={ owner } name={ name } link={ link } likes={ likes } onCardClick={ onCardClick } onCardLike = { onCardLikke } onCardDelete = { onCardDelete }/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main
