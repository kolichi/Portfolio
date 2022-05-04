// import React from 'react'
import './contact.css' 
import {MdOutlineEmail} from 'react-icons/md' 
import {RiMessengerLine} from 'react-icons/ri' 
import {BsWhatsapp} from 'react-icons/bs' 
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_05v52fc', 'template_pkyh6bv', form.current, 'o7Qq3ju_e3T-byO_q')

    e.target.reset()
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <section id='Contact'>

    <h5> Get in touch </h5> 
    <h2> Contact Me </h2>

    <div className="container contact__container">

     <div className="contact__options">

         <article className='contact__option'>
          <MdOutlineEmail className='contact__icon' />

          <h4>Email</h4>
          <h5>Kolichitutu110@gmail.com</h5>
          <a href="mailto:kolichitutu110@gmail.com"> Send a Message</a>

         </article>
         <article className='contact__option'>
          <RiMessengerLine className='contact__icon'/>

          <h4>Messenger</h4>
          <h5>Tutu kolichi kollinz</h5>
          <a href="https://m.me/collins.tutu.7"> Send a Message</a>

         </article>

         <article className='contact__option'>
          <BsWhatsapp className='contact__icon' />

          <h4>Whatsapp</h4>
          <h5>+260962388551</h5>
          <a href="https://api.whatsapp.com/send?phone+260962388551"> Send a Message</a>

         </article>

     </div>
         <form ref={form} onSubmit={sendEmail} >

           <input type="text" name='name' placeholder='Your full name' required />
           <input type="Email" name='email' placeholder='Your Email' required />
           <textarea  name='message' rows={7} placeholder='Your Message' required > </textarea>
           <button type='submit' className='btn btn-primary'> send Message </button>

         </form>

    </div>

    </section>
  )
}

export default ContactUs