import React from 'react'
import '../Gallery/gallery.css'
import img1 from '../../gallery/img1.webp'
import img2 from '../../gallery/img2.webp'
import img3 from '../../gallery/img3.webp'
import img4 from '../../gallery/img4.webp'
import img5 from '../../gallery/img5.webp'
import img6 from '../../gallery/img6.webp'
import img7 from '../../gallery/img7.webp'
import img8 from '../../gallery/img8.webp'
import img9 from '../../gallery/img11.webp'
import img10 from '../../gallery/img12.webp'
import img11 from '../../gallery/img13.webp'
import img12 from '../../gallery/img14.webp'
import img13 from '../../gallery/img15.webp'
import img14 from '../../gallery/img16.webp'
import img15 from '../../gallery/img17.webp'
import img16 from '../../gallery/img18.webp'
import img17 from '../../gallery/img19.webp'
import img18 from '../../gallery/img20.webp'
import img19 from '../../gallery/img21.webp'
import img20 from '../../gallery/img22.webp'

export default function Gallery() {
  return (
    <section id="gallery" class="gallery">
    <div class="container">
      <div class="gallery__background">
        <h2 class="gallery__title section-title">Фото галерея</h2>
        <div id="lightgallery" class="lightgallery">
          <a href={img1}>
            <img alt="img1" src={img1} />
          </a>
          <a href={img2}>
            <img alt="img2" src={img2} />
          </a>
          <a href={img3}>
            <img alt="img3" src={img3} />
          </a>
          <a href="img/img4.webp">
            <img alt="img4" src={img4} />
          </a>
          <a href="img/img5.webp">
            <img alt="img5" src={img5}/>
          </a>
          <a href="img/img6.webp">
            <img alt="img6" src={img6} />
          </a>
          <a href="img/img7.webp">
            <img alt="img7" src={img7} />
          </a>
          <a href="img/img8.webp">
            <img alt="img8" src={img8} />
          </a>
          <a href="img/img9.webp">
            <img alt="img9" src={img9} />
          </a>
          <a href="img/img10.webp">
            <img alt="img10" src={img10} />
          </a>
          <a href="img/img11.webp">
            <img alt="img11" src={img11} />
          </a>
          <a href="img/img12.webp">
            <img alt="img12" src={img12} />
          </a>
          <a href="img/img13.webp">
            <img alt="img13" src={img13} />
          </a>
          <a href="img/img14.webp">
            <img alt="img14" src={img14} />
          </a>
          <a href="img/img15.webp">
            <img alt="img15" src={img15}/>
          </a>
          <a href="img/img16.webp">
            <img alt="img16" src={img16} />
          </a>
          <a href="img/img17.webp">
            <img alt="img17" src={img17} />
          </a>
          <a href="img/img18.webp">
            <img alt="img18" src={img18} />
          </a>
          <a href="img/img19.webp">
            <img alt="img19" src={img19} />
          </a>
          <a href="img/img20.webp">
            <img alt="img20" src={img20} />
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}
