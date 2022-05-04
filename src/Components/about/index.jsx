import React from 'react'
import './about.css'
import ME from '../../assets/me.webp' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='About'>

     <h5> Get to Know </h5>
     <h2> About Me </h2>

     <div className="container about__container">

       <div className="about__me">

          <div className="about__me-image">
          
          <img src={ME} alt='' />

          </div>

       </div>


       <div className="about__content">
         <div className="about__cards">
           <article className='about__card'>

             <FaAward className='about__icon' />
             <h5> APIs &  PHP </h5>
             <small> 1+ years working </small> 

           </article>

           <article className='about__card'>

<FiUsers className='about__icon' />
<h5> Front-End Development </h5>
<small> 2+ years working </small> 

             </article>

            <article className='about__card'>

               <VscFolderLibrary className='about__icon' />
              <h5> Back-End Developemnt </h5>
                <small> 1+ years working </small> 

             </article>

         </div>

             <p>
               Hey there, Tutu here Iam a computer Scientist whose passionate about Technology and its current trends,
               My Aim and Joy Comes in helping to solve day to day problems or just make tideous tasks more flexible and enjoyable,
               the solutions that i provide are user centric with clear cut designs and quality.....Contact me and Book a service below!   

             </p>
            
              <a href='#Contact' className='btn btn-primary'>Lets Talk</a>

        </div>


        </div>



    </section>
  )
}

export default About