import React from 'react';
import avatar from '../images/image-avatar.jpg';

const Main = ({onEditProfile, onEditAvatar, onAddPlace}) => {

  return (
    <main className="content">
      <section className="profile">
        <div onClick={onEditAvatar} className="profile__edit-avatar">
          <img src={avatar} alt="Аватар" className="profile__avatar" />
        </div>
        <div className="info">
          <div className="info__conteiner">
            <h1 className="info__user-name">Жак-Ив Кусто</h1>
            <button onClick={onEditProfile} className="info__button-info" type="button" />
          </div>
          <p className="info__user-description">Исследователь океана</p>
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
