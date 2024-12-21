import React from 'react'
import './footer.css'


export default function Footer() {
  return (
    <section id="contacts" class="contacts">
    <div class="container">
      <h2 class="contacts-title section-title">Наші контакти</h2>
      <footer class="footer">
      <iframe
      class="contacts__map"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.170015374558!2d30.537522751441152!3d50.43793379284036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf077d8ee3a3%3A0x18ac4cd94df4fb34!2z0JrQu9C-0LLRgdGM0LrQuNC5INGD0LfQstGW0LcsIDE0LzI0LCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1707159611304!5m2!1suk!2sua" 
       allowfullscreen="" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <nav class="footer__nav">
        <ul class="footer__menu">
          <li><a class="link" href="#hero">Головна</a></li>
          <li><a class="link" href="#about">Про нас</a></li>
          <li><a class="link" href="#directions">Напрямки</a></li>
          <li><a class="link" href="#teachers">Викладачі</a></li>
          <li><a class="link" href="#prices">Ціни</a></li>
          <li><a class="link" href="#gallery">Галерея</a></li>
          <li><a class="link" href="#contacts">Контакти</a></li>
        </ul>
      </nav>
        <address class="footer__adress">
          <ul class="footer__address-list">
            <li>
              <a class="footer__address-link" href="tel:+ 380675317875"
                >+ 38 (067) 531 78 75</a
              >
            </li>
            <li>
              <a target="_blank"
                class="footer__address-link"
                href="https://maps.app.goo.gl/6p65eZDEXEUEB49L9"
                >Україна, м. Київ, Кловський узвіз, <br/>14/24
              </a>
            </li>
          </ul>
          <div>
            <a target="_blank" href="https://www.facebook.com/BLICKMusicSchool/">
             <svg class="footer__address-icon" width="32" height="32">
              <use href="./images/icons.svg#icon-facebook"></use>
             </svg>
            </a>
            <a target="_blank" href="https://instagram.com/blick_music_school?igshid=MzRlODBiNWFlZA==">
             <svg class="footer__address-icon" width="32" height="32">
              <use href="./images/icons.svg#icon-instagram"></use>
             </svg>
            </a>
      </div>
        </address>
      </footer>
    </div>
  </section>
  )
}
