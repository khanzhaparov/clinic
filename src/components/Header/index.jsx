import React from 'react';

import headerLogo from '../../assets/img/Header/logo.png';
import search from '../../assets/img/Header/search.svg';
import polygon from '../../assets/img/Header/polygon.svg';

import './Header.scss';

const Header = () => (
  <div className="header row">
    <div className="header__logo col">
      <img src={headerLogo} alt="logo" />
    </div>
    <div className="header__content col">
      <div className="header__content-up row">
        <div className="search col">
          <form>
            <input type="text" placeholder="поиск" name="search" />
            <button type="submit">
              <img src={search} alt="search icon" />
            </button>
          </form>
        </div>
        <div className="tender-eye col">
          <button type="button">для слабовидящих</button>
        </div>
      </div>
      <div className="header__content-down">
        <ul className="links">
          <li>Главная</li>
          <li className="active">
            Медицинские услуги
            <img src={polygon} alt="polygon" />
          </li>
          <li>Акции</li>
          <li className="active">
            Цены
            <img src={polygon} alt="polygon" />
          </li>
          <li>О клинике</li>
          <li>Врачи</li>
          <li>Отзывы</li>
          <li className="active">
            Блог
            <img src={polygon} alt="polygon" />
          </li>
          <li>Контакты</li>
        </ul>
      </div>
    </div>
    <div className="header__blue col">
      <div className="appointment">
        <button type="button">записаться на прием</button>
      </div>
      <a href="tel:+7 (777) 955‒59‒95" className="phone col">+7 (777) 955‒59‒95</a>
    </div>
  </div>
);

export default Header;
