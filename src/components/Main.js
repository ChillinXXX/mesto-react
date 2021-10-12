import React from 'react';
import api from '../utils/api.js';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

const Main = ({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) => {
  //Стейт для массива карточек
  const [cards, setCards] = React.useState([]);
  //Подписка на провайдера контекста данных текущего пользователя
  const currentUser = React.useContext(CurrentUserContext);
  //При перевой загрузке страницы делаем API запрос данных карточек и записывае в значения переменных useState
  React.useEffect(() => {
    api.getInitialCardList()
      .then((dataCards) => {
        setCards(dataCards);
      })
      .catch((error) => alert(`Что-то пошло не так=( ${error}`));
  }, [])

  //Функция обработки лайка/дизлайка карточки
  const handleCardLike = ({likes, id}) => {
    const isLiked = likes.some(i => i._id === currentUser._id);
    !isLiked ?
              api.setLike(id)
                            .then((dataCard) => {
                              const updateCards = cards.reduce((value, item) => {
                                const length = item._id === id ?  value.push(dataCard) : value.push(item);
                                return value;
                              }, []);
                              setCards(updateCards);
                              /////////////////////////Удалить костыль/////////////////////////
                              api.setNewCard({ name:'МОЯ_Картинка!', link: 'https://mtdata.ru/u14/photo402F/20014746671-0/original.gif'})
                                .then((result) => {console.log(result)})
                                .catch((error) => {console.log(`Ошибка API:${error}`)});
                              /////////////////////////Удалить костыль/////////////////////////
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
                        console.log(serverResponse);
                        const updateCards = cards.filter(card => card._id !== id);
                        setCards(updateCards);
                      })
                    .catch((error) => {console.log(`Ошибка запроса API:${error}`)})
  }

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
          {cards.map(({ name, link, likes, owner, _id }) => (
            <Card key={_id} id = {_id} owner={owner} name={name} link={link} likes={likes} onCardClick={onCardClick} onCardLike = { handleCardLike } onCardDelete = { handleCardDelete }/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main
