import React from 'react'
import './teachers.css'
import TeachOne from '../../images/TEACH_1.webp'
import TeachTwo from '../../images/TEACH_2.webp'
import TeachFour from '../../images/TEACH_4.webp'
import TeachSix from '../../images/TEACH_6.webp'
import TeachNine from '../../images/TEACH_9.webp'
import TeachTen from '../../images/TEACH_10.webp'



export default function Teachers() {
  return (
   <section id="teachers" class="teachers">
   <div class="container">
     <h2 class="teachers-title section-title">Наші викладачі:</h2> 
     <ul class="teachers-list large-screen">
       <li class="list-item">
         <article class="teachers-card">
           <img src={TeachOne} alt="" class="teachers-img" />
           <div class="text-item">
             <h3 class="name">Катерина Петухова</h3>
             <p class="instrument">Саксофон, фортепіано, блокфлейта</p>
             <p class="slogan">«Допомагайте дитині освоювати неосвоєне раніше. Робіть це, наповнюючи навколишній світ турботою, стриманістю, тишею і любовʼю»</p>
           </div>
         </article>
       </li>
       <li class="list-item">
         <article class="teachers-card">
           <img src={TeachSix} alt="" class="teachers-img" />
           <div class="text-item">
             <h3 class="name">Марія Соболева</h3>
             <p class="instrument">Ударні, фортепіано</p>
             <p class="slogan">«Головне для мене — щоб учень мав здатність виразити себе так, як він сам себе відчуває»</p>
           </div>
         </article>
       </li>
       <li class="list-item">
         <article class="teachers-card">
           <img src={TeachNine} alt="" class="teachers-img" />
           <div class="text-item">
             <h3 class="name">Світлана Єленчук</h3>
             <p class="instrument">Фортепіано</p>
             <p class="slogan">«Знайди свій шлях у музиці»</p>
           </div>
         </article>
       </li>
       <li class="list-item">
         <article class="teachers-card">
           <img src={TeachTwo} alt="" class="teachers-img" />
           <div class="text-item">
             <h3 class="name">Денис Камкін</h3>
             <p class="instrument">Ударні інструменти</p>
             <p class="slogan">“Мистецтво навчання є мистецтво пробуджувати в юних душах допитливість і потім задовольняти її”</p>
           </div>
         </article>
       </li>
       <li class="list-item">
         <article class="teachers-card">
           <img src={TeachFour} alt="" class="teachers-img" />
           <div class="text-item">
             <h3 class="name">Олександр Богдан</h3>
             <p class="instrument">Гітара, електрогітара, укулеле</p>
             <p class="slogan">«Краще запалити свічку, ніж нарікати на темряву»</p>
           </div>
         </article>
       </li>
       <li class="list-item">
         <article class="teachers-card">
           <img src={TeachTen} alt="" class="teachers-img" />
           <div class="text-item">
             <h3 class="name">Настя Вечір</h3>
             <p class="instrument">Вокал</p>
             <p class="slogan">«Співати чисто це добре, але найвищий рівень професіоналізму - це коли співаєш душею»</p>
           </div>
         </article>
       </li>
     </ul>
   </div>
 </section>
  )
}
