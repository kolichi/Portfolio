import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'



const services = () => {
  return (
    <section id='Services'>

      <h5> What i offer </h5>
      <h2> Services </h2>
       
       <div className="container services__container">

         <article className="service">

            <div className="service__head">
              <h3> Networking And Administration </h3>
            </div>
               <ul className='service__list'> 
               <li>
                  <BiCheck className='service__list-icon' />
                  <p> Network Configuarations </p>
               </li>
               <li>
                  <BiCheck className='service__list-icon' />
                  <p> Server installation and management </p>
               </li>
               <li>
                  <BiCheck className='service__list-icon' />
                  <p> Network device configuaration </p>
               </li>
               </ul>
         </article>
         {/***End Of UI/UX DESIGN */}

         <article className="service">

<div className="service__head">
  <h3> WEB & SOFTWARE ENGINEERING  </h3>
</div>
   <ul className='service__list'> 
   <li>
      <BiCheck className='service__list-icon' />
      <p> Client Side Development  </p>
   </li>
   <li>
      <BiCheck className='service__list-icon' />
      <p> Server Side Development  </p>
   </li>
   <li>
      <BiCheck className='service__list-icon' />
      <p> System intergration </p>
   </li>
   <li>
      <BiCheck className='service__list-icon' />
      <p> Web analysis and Design </p>
   </li>
   <li>
      <BiCheck className='service__list-icon' />
      <p> Java Application (FrontEnd) </p>
   </li>
   <li>
                  <BiCheck className='service__list-icon' />
                  <p> Desinging And Developing UI/UX design using scss </p>
               </li>
               <li>
                  <BiCheck className='service__list-icon' />
                  <p> Optimizing CSS syntax and Responsiveness </p>
               </li>
               <li>
                  <BiCheck className='service__list-icon' />
                  <p> Improving Branding and User Experience </p>
               </li>
   <li>
      <BiCheck className='service__list-icon' />
      <p> Api Building </p>
   </li>
   <li>
      <BiCheck className='service__list-icon' />
      <p> Building and use of CMS 
         (wordpress,strapi etc) </p>
   </li>
   </ul>
</article>
{/***End Of UI/UX DESIGN */}
<article className="service">

<div className="service__head">
  <h3> DATABASE DESIGN / BUILDING </h3>
</div>
   <ul className='service__list'> 
   <li>
      <BiCheck className='service__list-icon' />
      <p> System Analysis And Design </p>
   </li>
   <li>
      <BiCheck className='service__list-icon' />
      <p> Relational Database Building </p>
   </li>
   <li>
      <BiCheck className='service__list-icon' />
      <p> Oracle DBMS (11g +)</p>
   </li>
   <li>
      <BiCheck className='service__list-icon' />
      <p> PLSQL  </p>
   </li>
   <li>
      <BiCheck className='service__list-icon' />
      <p> Normalization </p>
   </li>
   </ul>
</article>
{/***End Of UI/UX DESIGN */}

       </div>

    </section>
  )     
}

export default services 