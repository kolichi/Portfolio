import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const footer = () => {
  return (
    <footer id='Footer'> 
    
    <a href="" className="footer__logo"> TUTU </a>

    <ul className="permalinks">
      
    <li> <a href='#'> Home </a> </li>
    <li> <a href='#About'> about </a> </li>
    <li> <a href='#Experience'> Experience </a> </li>
    <li> <a href='#Services'> services </a> </li>
    <li> <a href='#Portfolio'> portfolio </a> </li>
    <li> <a href='#Contact'> contact </a> </li>

    </ul>
    
    <div className="footer__socials">
     <a href='https://facebook.com'> <FaFacebookF/> </a>
     <a href='https://facebook.com'> <FiInstagram/> </a>
     <a href='https://facebook.com'> <IoLogoTwitter/></a>
    </div>
     
     <div className="footer__socials">

      <small> &copy; TERA TECHNOLOGIES. ALL RIGHTS RESERVED 2022 </small>
     
     </div>

    </footer>
  )
}

export default footer