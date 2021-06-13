import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithImage from './popupWithImage';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <>
      <Header />

      <Main />

      <Footer />

      <PopupWithForm elemClass={'info'} elemTitle={'Редактировать профиль'}>
        <fieldset className="popup__fieldset">
          <div className="popup__field">
            <input type="text" className="popup__input popup__input_el_name" id="name" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
            <span className="popup__input-error name-error" />
          </div>
          <div className="popup__field">
            <input type="text" className="popup__input popup__input_el_about" id="about" name="about" placeholder="О себе" required minLength={2} maxLength={200} />
            <span className="popup__input-error about-error" />
          </div>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm elemClass={'avatar'} elemTitle={'Обновить аватар'}>
        <fieldset className="popup__fieldset">
          <div className="popup__field">
            <input type="url" className="popup__input popup__input_el_link-avatar" id="link-avatar" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-avatar-error" />
          </div>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm elemClass={'addCard'} elemTitle={'Новое место'}>
        <fieldset className="popup__fieldset">
          <div className="popup__field">
            <input type="text" className="popup__input popup__input_el_name-card" id="name-card" name="name" placeholder="Название" required minLength={2} maxLength={30} />
            <span className="popup__input-error name-card-error" />
          </div>
          <div className="popup__field">
            <input type="url" className="popup__input popup__input_el_link-card" id="link-card" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-card-error" />
          </div>
        </fieldset>
      </PopupWithForm>

      <PopupWithImage />

      <PopupWithForm elemClass={'delete-card'} elemTitle={'Вы уверены?'} />

      <template id="card" />
    </>
  );
}

export default App;
