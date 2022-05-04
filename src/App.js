import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import Header from './Components/header'
import Nav from './Components/nav'
import About from './Components/about'
import Experience from './Components/experience'
import Services from './Components/services'
import Portfolio from './Components/portfolio'
import Contact from './Components/contact'
import Footer from './Components/footer'



const App = () => {
  return (

    
    <>
      
    <Header />
     <Nav />
    <About />
    <Experience />   
    <Services />
    <Portfolio />
     {/* <Testimonial /> */}
    <Contact />
    <Footer /> 
    </>
   
  )
}

export default App