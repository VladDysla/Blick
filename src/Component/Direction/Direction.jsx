import React from 'react';
import './direction.css';
import DirectImgOne from '../../images/IMG_1.webp';
import DirectImgTwo from '../../images/IMG_2.webp';
import DirectImgThree from '../../images/IMG_3.webp';
import DirectImgFour from '../../images/IMG_4jpg.webp';
import DirectImgFive from '../../images/IMG_5.webp';
import DirectImgSix from '../../images/IMG_6.webp';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Direction() {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;

  return (
    <section className="directions" id="directions">
      <div className="container">
        <h2 className="direction-title section-title">Напрямки для навчання:</h2>
        <div className="directions-list">
          <div className="directions-item" id="piano">
            <article className="directions-card">
              <img src={DirectImgOne} alt="Фортепіано" className="directions-img" />
              <h3 className="directions-title">Фортепіано</h3>
            </article>
          </div>
          <div className="directions-item" id="violin">
            <article className="directions-card">
              <img src={DirectImgTwo} alt="Скрипка" className="directions-img" />
              <h3 className="directions-title">Скрипка</h3>
            </article>
          </div>
          <div className="directions-item" id="drums">
            <article className="directions-card">
              <img src={DirectImgThree} alt="Барабани" className="directions-img" />
              <h3 className="directions-title">Барабани</h3>
            </article>
          </div>
          <div className="directions-item" id="voice">
            <article className="directions-card">
              <img src={DirectImgFour} alt="Вокал" className="directions-img" />
              <h3 className="directions-title">Вокал</h3>
            </article>
          </div>
          <div className="directions-item" id="guitar">
            <article className="directions-card">
              <img src={DirectImgFive} alt="Гітара" className="directions-img" />
              <h3 className="directions-title">Гітара</h3>
            </article>
          </div>
          <div className="directions-item" id="sax">
            <article className="directions-card">
              <img src={DirectImgSix} alt="Саксофон" className="directions-img" />
              <h3 className="directions-title">Саксофон (блокфлейта)</h3>
            </article>
          </div>
        </div>
        
        <div className="directions-list-small">
          <Swiper
            spaceBetween={20} // Відстань між слайдами
            centeredSlides={true} // Центрує активний слайд
            loop={true} // Безкінечний цикл
            initialSlide={1} // Початок з другого слайда
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              340: { // Для екранів шириною 500px і менше
                slidesPerView: 1.2,
              },
              380: { // Для екранів шириною 500px і менше
                slidesPerView: 1.3,
              },
              440: { // Для екранів шириною 500px і менше
                slidesPerView: 1.49,
              },
              461: { // Для екранів шириною 500px і менше
                slidesPerView: 1.5,
              },
              501: { // Для екранів більше 500px
                slidesPerView: 1.6,
              },
            }}
          >
            <SwiperSlide>
              <div className="directions-item-small swiper-slide-prev swiper-slide-active">
                <article className="directions-card">
                  <img src={DirectImgOne} alt="Фортепіано" className="directions-img" />
                  <h3 className="directions-title">Фортепіано</h3>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="directions-item-small swiper-slide-next">
                <article className="directions-card">
                  <img src={DirectImgTwo} alt="Скрипка" className="directions-img" />
                  <h3 className="directions-title">Скрипка</h3>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="directions-item-small swiper-slide-prev">
                <article className="directions-card">
                  <img src={DirectImgThree} alt="Барабани" className="directions-img" />
                  <h3 className="directions-title">Барабани</h3>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="directions-item-small swiper-slide-prev swiper-slide-active">
                <article className="directions-card">
                  <img src={DirectImgFour} alt="Вокал" className="directions-img" />
                  <h3 className="directions-title">Вокал</h3>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="directions-item-small swiper-slide-prev">
                <article className="directions-card">
                  <img src={DirectImgFive} alt="Гітара" className="directions-img" />
                  <h3 className="directions-title">Гітара</h3>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="directions-item-small swiper-slide-prev">
                <article className="directions-card">
                  <img src={DirectImgSix} alt="Саксофон" className="directions-img" />
                  <h3 className="directions-title">Саксофон (блокфлейта)</h3>
                </article>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
