// import React from 'react'
// import './testimonial.css'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'

// // import Swiper core and required modules
// import {Pagination, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/Pagination';


// const data = [

// {
//   avatar: AVTR1,
//   name: 'Mwape yumba', 
//   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro quidem consequatur laboriosam a doloribus rem iste facere autem,iusto ullam omnis dignissimos in. Commodi, eligendi? Odit consequuntur tenetur repellat,cumque alias rerum in magnam natus at libero ullam debitis. '
// },

// {
//   avatar: AVTR2,
//   name: 'Collins Matutu', 
//   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro quidem consequatur laboriosam a doloribus rem iste facere autem,iusto ullam omnis dignissimos in. Commodi, eligendi? Odit consequuntur tenetur repellat,cumque alias rerum in magnam natus at libero ullam debitis. '
// },
// {
//   avatar: AVTR3,
//   name: 'Ndazi Juma', 
//   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro quidem consequatur laboriosam a doloribus rem iste facere autem,iusto ullam omnis dignissimos in. Commodi, eligendi? Odit consequuntur tenetur repellat,cumque alias rerum in magnam natus at libero ullam debitis. '
// },
// {
//   avatar: AVTR4,
//   name: 'Faith sibeene', 
//   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro quidem consequatur laboriosam a doloribus rem iste facere autem,iusto ullam omnis dignissimos in. Commodi, eligendi? Odit consequuntur tenetur repellat,cumque alias rerum in magnam natus at libero ullam debitis. '
// }


// ]



// const testimonial = () => {
//   return (
//     <section id='Testimonial'>

//       <h5> Reviews from clients </h5>
//       <h2> Testimonialls </h2>

//       <Swiper className="container testimonials__container">  

//       {             
//       data.map(({avater, name, review}, index) => { 
        
//         return (

//           <SwiperSlide className="testimonial">  
//           <div className="client__avatar">
//             <img src={avater} />
//             <h5 className='client__name'> {name} </h5>
//             </div> 
//             <small className='client__review'>  <p>
//             {review}          
//             </p>
//             </small>
            
//         </SwiperSlide>
          
//           )
//       } )
      
//     }
//       </Swiper>


//     </section>
//   )
// }

// export default testimonial