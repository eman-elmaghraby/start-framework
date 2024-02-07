import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab} from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab);
library.add(fas);
export default function Footer() {
  return (
    <>
    <footer>
    <div className='container text-center p-5'>
    <div className='row'>
          <div className='col-md-4 text-center'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className='col-md-4'>
            <h3>AROUND THE WEB</h3>
            <div className='social d-flex align-items-center justify-content-evenly'>
           <span className=' rounded-circle border border-2 p-3 d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-brands fa-facebook" /> </span>
           <span className=' rounded-circle border border-2 p-3 d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-brands fa-twitter" /></span>
           <span className=' rounded-circle border border-2 p-3 d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></span>
           <span className=' rounded-circle border border-2 p-3 d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-solid fa-globe" /></span>
            </div>
          </div>
          <div className='col-md-4'>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
    </div>
    </div> 
    <div className='copyRight p-4'>
   <div className='container'>
   <p className='text-center'>Copyright © Your Website 2021</p>
   </div>
    </div>
    </footer>

    </>
  )
}
