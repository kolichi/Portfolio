import React from 'react'
import CV from '../../assets/collins.pdf' 

const CTA = () => {
  return (
      
         <div className="cta">
             <a href={CV} download className='btn'> Download CV </a>
             <a href='#Contact' className='btn btn-primary'> Lets Talk </a>
         </div>

  )
}

export default CTA
