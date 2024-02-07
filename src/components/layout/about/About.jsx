import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.css'

export default function About() {
  return (
    <>
      <section className='about p-5'>
    <div className='container d-flex align-items-center justify-content-center flex-column'>
       <div className='p-5'>
       <h2 className='text-center'>ABOUT COMPONENT</h2>
        <div className='starAbout position-relative text-center'>
        <FontAwesomeIcon icon="fa-solid fa-star" />
        </div>
       <div className='d-flex m-4'>
       <p className='me-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, 
        CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
         CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

       </div>
       </div>
    </div>
    </section>
    </>
  )
}
