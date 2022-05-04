import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const data = [
 
  {         
    id:1,
    image:IMG1,
    title: 'Stretford Lending Services' ,
    github:'https://github.com/kolichi',
    demo: 'http://stretfordlending.com' 
  },

  {         
    id:2,
    image:IMG2,
    title: 'Media Coporate Demo' ,
    github:'https://github.com/kolichi/ZDML-CORPORATE',
    demo: 'https://zadama.netlify.app/' 
  },

  {         
    id:3,
    image:IMG3,
    title: 'Java School Management Sys' ,
    github:'https://github.com/kolichi',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization' 
  },

  {         
    id:4,
    image:IMG4,
    title: 'React Ecoomerce Multi-vender Marketplace' ,
    github:'https://github.com/kolichi',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization' 
  },

  {         
    id:5,
    image:IMG5,
    title: 'Wina Wangu Mobile Money (Comming soon) ' ,
    github:'https://github.com/kolichi',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization' 
  },

  {         
    id:6,
    image:IMG6,
    title: 'Blog (Comming Soon)' ,
    github:'https://github.com/kolichi',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization' 
  },


]


const portfolio = () => {
  return (
    <section id='Portfolio'>

     <h5>  My recent work </h5>
     <h2> Portfolio </h2>

     <div className="conatiner portfolio__container">  {  
      
           data.map (({id, image, title, github, demo}) => {
             return (
               <article key={id} className="portfolio__item">
                 <div className="portfolio__item-image">
                   <img src={image} alt={title} />
                 </div>
                 <h3> {title} </h3>
                   <div className="portfolio__item-cta">    
                    <a href={github} className='btn' target='_blank' rel="noreferrer"> Github </a>
                    <a href={demo} className='btn btn btn-primary' target='_blank' rel="noreferrer"> live Demo </a>
                   </div>
               </article>
             )
           } )

          }

{  /**** ****************   STATIC CONTENT *************************
 *  <article className="portfolio__item">
          
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
          </div>

         <h3> This is a portfolio item title </h3>
         <div className="portfolio__item-cta">    
         <a href='https://github.com' className='btn' target='_blank'> Github </a>
         <a href='https://dribbble.com/Alien_pixels' className='btn btn btn-primary' target='_blank'> live Demo </a>
         </div>

       </article>

       <article className="portfolio__item">
          
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
          </div>

         <h3> This is a portfolio item title </h3>
         <div className="portfolio__item-cta">    
         <a href='https://github.com' className='btn' target='_blank'> Github </a>
         <a href='https://dribbble.com/Alien_pixels' className='btn btn btn-primary' target='_blank'> live Demo </a>
         </div>

       </article>
       <article className="portfolio__item">
          
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
          </div>

         <h3> This is a portfolio item title </h3>
         <div className="portfolio__item-cta">    
         <a href='https://github.com' className='btn' target='_blank'> Github </a>
         <a href='https://dribbble.com/Alien_pixels' className='btn btn btn-primary' target='_blank'> live Demo </a>
         </div>

       </article>
       <article className="portfolio__item">
          
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
          </div>

         <h3> This is a portfolio item title </h3>
         <div className="portfolio__item-cta">    
         <a href='https://github.com' className='btn' target='_blank'> Github </a>
         <a href='https://dribbble.com/Alien_pixels' className='btn btn btn-primary' target='_blank'> live Demo </a>
         </div>

       </article>
       <article className="portfolio__item">
          
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
          </div>

         <h3> This is a portfolio item title </h3>
         <div className="portfolio__item-cta">    
         <a href='https://github.com' className='btn' target='_blank'> Github </a>
         <a href='https://dribbble.com/Alien_pixels' className='btn btn btn-primary' target='_blank'> live Demo </a>
         </div>

       </article>
       <article className="portfolio__item">
          
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
          </div>

         <h3> This is a portfolio item title </h3>
         <div className="portfolio__item-cta">    
         <a href='https://github.com' className='btn' target='_blank'> Github </a>
         <a href='https://dribbble.com/Alien_pixels' className='btn btn btn-primary' target='_blank'> live Demo </a>
         </div>

       </article>

  */ }



     </div>
    </section>
  )
}

export default portfolio