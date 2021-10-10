import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

const Card = ({ owner, name, link, likes, onCardClick }) => {
  //Подписываемся на контекст currentUser
  const currentUser = React.useContext(CurrentUserContext);
  //Определяем принадлежит ли карточка текущему ползователю
  const isMyCard = owner._id === currentUser._id;
  //Запишем в массив ID всех пользователей лакнувших карточку
  const ownersID = likes.reduce((value, item) => {
    const length = value.push(item._id);
    return value;
  }, []);

  //Функция: Передаем в хендл данные текущей карточки для  useState переменной selectedCard
  const handleClick = () => {
    onCardClick({name, link})
  }

  return (
    <li className="cards__item">
      <img onClick={handleClick} className="cards__images" src={link} alt={name} />
      <div className="cards__caption">
        <h3 className="cards__title">{name}</h3>
        <div className="cards__like">
          <button className = { ownersID.includes(currentUser._id) ? "cards__button-like_active" : "cards__button-like" } type="button" />
          <span className="cards__total-like">{likes.length}</span>
        </div>
      </div>
      <button className={isMyCard ? "cards__button-delete" : "cards__button-delete_hidden"} type="button" />
    </li>
  )
}

export default Card
