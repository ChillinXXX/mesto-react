import React from 'react';
import avatar from '../images/image-avatar.jpg';
import api from '../utils/Api';

const Main = ({ onEditProfile, onEditAvatar, onAddPlace }) => {

  const [userName, setUserName] = React.useState('Имя пользователя');
  const [userDescription, setUserDescription] = React.useState('О себе');
  const [userAvatar, setUserAvatar] = React.useState(avatar);

  React.useEffect(() => {
    api.getUserInfo()
      .then((result) => {
        console.log(result);
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
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
        <ul className="cards" />
      </section>
    </main>
  );
}

export default Main
