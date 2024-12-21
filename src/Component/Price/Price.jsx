import React from 'react'
import './price.css'

export default function Price() {
  return (
   <section id="prices" class="prices">
   <div class="container">
     <h2 class="prices__title">Пропозиція та ціна:</h2>
     <ul class="prices__list">
       <li class="prices__item">
         <h3 class="prices__item-title">Поурочно</h3>
         <div class="prices__item-text">
           <p>30хв - 450грн</p>
           <p>45хв - 550грн</p>
           <p>60хв - 650грн</p>

         </div>
       </li>
       <li class="prices__item">
         <h3 class="prices__item-title">4 уроків</h3>
         <div class="prices__item-text">
           <p>30хв - 1700грн</p>
           <p>45хв - 2000грн</p>
           <p>60хв - 2300грн</p>
         </div>
       </li>
       <li class="prices__item">
         <h3 class="prices__item-title">8 уроків</h3>
         <div class="prices__item-text">
           <p>30хв - 2800грн</p>
           <p>45хв - 3500рн</p>
           <p>60хв - 4000грн</p>
         </div>
       </li>
     </ul>
   </div>
   <h2 class="trial__lesson">Пробний урок <span class="break-text">30хв - 200 грн</span></h2>
 </section>
  )
}
