import React from 'react';

const Card = ({ isNameCard, isLinkCard, isLikesCard, onCardClick }) => {
  return (
    <li className="cards__item">
      <img onClick={onCardClick} className="cards__images" src={isLinkCard} alt={isNameCard} />
      <div className="cards__caption">
        <h3 className="cards__title">{isNameCard}</h3>
        <div className="cards__like">
          <button className="cards__button-like" type="button" />
          <span className="cards__total-like">{isLikesCard.length}</span>
        </div>
      </div>
      <button className="cards__button-delete" type="button" />
    </li>
  )
}

export default Card
