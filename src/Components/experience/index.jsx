import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs' 

const experience = () => {
  return (
    <section id='Experience'> 
    
    <h5> What skills i Have </h5>

    <h2>  My Experience </h2>


    <div className="conatiner experience__container">    
     <div className="experience__frontend">
        
       <h3> FrontEnd Development </h3>

       <div className="experience__content">

        <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon' />
          <div > 
          <h4> HTML & CSS </h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>

          <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon' />
          <div > 
          <h4> JAVA </h4>
          <small className='text-light'>Intermediate</small>
          </div>
          
          </article>

          <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon' />
          <div > 
          <h4> React JS </h4>
          <small className='text-light'>Intermediate</small>
          </div>
          
          </article>

          <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon' />
          <div > 
          <h4> JavaScript </h4>
          <small className='text-light'>Intermediate</small>
          </div>
          
          </article>

          <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon' />
          <div > 
          <h4> Bootstrap  </h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>

          <article className='experience__details'>
          
          <BsPatchCheckFill  className='experience__details-icon'/>
          <div > 

          <h4> Python </h4>
          <small className='text-light'>intermediate</small>
          </div>
          
          </article>






       </div>

     </div>

     <div className="experience__backend">

          <h3>BackEnd Development </h3>

          <div className="experience__content">

        <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon' />
          <div > 
          <h4> PHP </h4>
          <small className='text-light'>intermediate</small>
          </div>
          
          </article>

          <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon' />
          <div > 
          <h4> Node JS </h4>
          <small className='text-light'>Intermediate</small>
          </div>
          
          </article>

          <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon' />
          <div > 
          <h4> REST APIs AND GraphQL </h4>
          <small className='text-light'>intermediate</small>
          </div>
          
          </article>

          <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon' />
          <div > 
          <h4> MYSQL / PLSQL </h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>

          <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon' />
          <div > 
          <h4> ORACLE DBMS </h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>

          <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon'/>
          <div > 
          <h4> FULL AND HEADLESS CMS</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>






       </div>


     </div>
    
    </div>
    
    </section>
  )
}

export default experience