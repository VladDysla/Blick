import React from 'react'
import './form.css'

export default function Form() {
  return (
   <section class="forms" id="forms">
   <div class="container">
     <h2 class="forms-title section-title">Записатися на заняття</h2>
   <div class="forms__container">
     <form target="_blank"
       action="https://formsubmit.co/Blickmusicschools@gmail.com"
       method="POST"
       class="forms__form"
     >
       <div class="forms__form-input">
         <input type="text" name="Імʼя" placeholder="Ваше імʼя" required />
       </div>
       <div class="forms__form-input">
         <input type="text" name="Імʼя дитини" placeholder="Імʼя дитини" required />
       </div>
       <div class="forms__form-input">
         <input type="text" name="інструмент" placeholder="Музичний інструмент" required />
       </div>
       <div class="forms__form-input">
         <input type="phone" name="телефон" placeholder="Номер телефону" required />
       </div>
       <div class="forms__form-input">
         <input type="email" name="пошта" placeholder="Ваша пошта" required />
       </div>
       <div class="forms__form-submit">
         <button class="form__button" type="submit">ВІДПРАВИТИ</button>
       </div>
     </form>
   </div>
 </div>
 </section>
  )
}
