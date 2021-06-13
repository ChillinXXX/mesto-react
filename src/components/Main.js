import React from 'react';
import avatar from '../images/image-avatar.jpg';

const handleEditAvatarClick = () => {
  const popupEditAvatar = document.querySelector('.popup_el_avatar');
  popupEditAvatar.classList.add('popup_opened');
}

const handleEditProfileClick = () => {
  const popupEditProfile = document.querySelector('.popup_el_info');
  popupEditProfile.classList.add('popup_opened');
}

const handleAddPlaceClick = () => {
  const popupNewPlace = document.querySelector('.popup_el_addCard');
  popupNewPlace.classList.add('popup_opened');
}

export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div onClick={handleEditAvatarClick} className="profile__edit-avatar">
          <img src={avatar} alt="Аватар" className="profile__avatar" />
        </div>
        <div className="info">
          <div className="info__conteiner">
            <h1 className="info__user-name">Жак-Ив Кусто</h1>
            <button onClick={handleEditProfileClick} className="info__button-info" type="button" />
          </div>
          <p className="info__user-description">Исследователь океана</p>
        </div>
        <button onClick={handleAddPlaceClick} className="profile__button-add" type="button" />
      </section>
      <section className="cards-section">
        <ul className="cards" />
      </section>
    </main>
  );
}
