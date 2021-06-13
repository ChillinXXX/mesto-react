import React from 'react';
import logo from '../images/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="logo" target="_blank">
        <img src={logo} alt="Логотип проекта Место" className="logo__image" />
      </a>
    </header>
  );
}
