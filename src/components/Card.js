import React from 'react';

const Card = ({ name, link, likes, onCardClick }) => {

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
          <button className="cards__button-like" type="button" />
          <span className="cards__total-like">{likes.length}</span>
        </div>
      </div>
      <button className="cards__button-delete" type="button" />
    </li>
  )
}

export default Card
