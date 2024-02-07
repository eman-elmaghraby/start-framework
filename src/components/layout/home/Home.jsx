import React from 'react'
import './Home.css'
import img1 from './avataaars.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <>
    <section className='home p-5'>
    <div className='container d-flex align-items-center justify-content-center flex-column'>
        <img src={img1} className='w-25'/>
       <div className='p-5'>
       <h2>START FRAMEWORK</h2>
        <div className='star position-relative text-center'>
        <FontAwesomeIcon icon="fa-solid fa-star" />
        </div>
        <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>
       </div>
    </div>
    </section>
    
    </>
  )
}
