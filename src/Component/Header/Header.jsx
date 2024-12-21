import React from "react";
import "./../Header/header.css";
import Logo from "../../images/Logo.png";
import SmallLogo from "../../images/smallLogo.png";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header-logo">
              <div className="header-logo__text">Blick Music School</div>
              <img
                src={Logo} // Default logo
                alt="Логотип школи"
                className="header-logo-img"
              />
              <img
                src={SmallLogo} // Small logo for smaller screens
                alt="Логотип школи"
                className="header-logo-img-small"
              />
            </div>
            <div className="header-logo__small">
            <img
                src={SmallLogo} // Small logo for smaller screens
                alt="Логотип школи"
                className="header-logo-img-small"
              />
              <div className="header-logo__text">Blick Music School</div>
            </div>
            <div className="header__btn">
              <span></span>
            </div>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__list-item">
                  <a href="#hero" className="menu__list-link">
                    Головна
                  </a>
                </li>
                <li className="menu__list-item">
                  <a href="#about" className="menu__list-link">
                    Про нас
                  </a>
                </li>
                <li className="menu__list-item">
                  <a href="#directions" className="menu__list-link">
                    Напрямки
                  </a>
                </li>
                <li className="menu__list-item">
                  <a href="#teachers" className="menu__list-link">
                    Викладачі
                  </a>
                </li>
                <li className="menu__list-item">
                  <a href="#prices" className="menu__list-link">
                    Ціни
                  </a>
                </li>
                <li className="menu__list-item">
                  <a href="#gallery" className="menu__list-link">
                    Галерея
                  </a>
                </li>
                <li className="menu__list-item">
                  <a href="#contacts" className="menu__list-link">
                    Контакти
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section className="hero-section" id="hero">
        <div className="slider">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide-1">
                <div className="container">
                  <h1 className="title">BLICK MUSIC SCHOOL</h1>
                  <h2 className="hero__subtitle">ЛЮБИМО ТЕ, ЩО РОБИМО</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
