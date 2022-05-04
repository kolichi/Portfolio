import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-about.png'
import HeaderSocials from './HeaderSocials'

export default function  Header ()  {
  return (
    <header>  
      <div className="container header__container"> 
      <h5> Hello I'm</h5>
      <h1> KOLICHI COLLINS TUTU </h1>
      <div className="text-light"> Fullstack developer</div>
      <CTA />
      <HeaderSocials />

      <div className="me">

        <img src={ME} alt="me" />
      </div>

        <a href='#Footer' className='scroll__down'> Scroll Down </a>
      </div>
    </header>
  )
}

