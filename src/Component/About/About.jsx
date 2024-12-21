import React from 'react'
import './about.css'
import IMG_ONE from './../../images/IMG_01.webp'

export default function About() {
  return (
   <section class="about" id="about">
   <div class="about__content">
     <img src={IMG_ONE} alt="" class="about__img" />
     <div class="container">
       <div class="about__text">
         <p about__text-descr>
           <span>BLICK Music School</span> — це більше ніж музика!❤️
         </p>
         <p about__text-descr>
           <span>BLICK Music School</span> — це місце щасливих дітей 🤍
         </p>
         <p about__text-descr>
           <span>BLICK Music School</span> — це сучасний простір
           друзів-однодумців 🥰
         </p>
         <p about__text-descr>
           <span>BLICK Music School</span> — це здійснення творчих мрій
           дорослих людей! ✨
         </p>
         <p about__text-descr>
           <span>BLICK Music School</span> — це концерти, на яких емоційна
           складова просто невід’ємна частина🎵🎶
         </p>
         <p about__text-descr>
           <span>BLICK Music School</span> — молоді вчителі-новатори, які
           володіють сучасними методами навчання та втілюють прогресивні
           ідеї 💡
         </p>
       </div>
     </div>
   </div>
 </section>
  )
}
