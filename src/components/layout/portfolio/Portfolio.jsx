import React, { useState } from 'react'
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from './images/poert1.png'
import img2 from './images/port2.png'
import img3 from './images/port3.png'

export default function Portfolio() {
  const [imageOnClick, setimageOnClick]= useState("")
  const [openLayer, setOpenLayer ]= useState(false)


const displayImage= (imgSrc) =>{
  setimageOnClick(imgSrc)
  setOpenLayer(true)

}

const handlecloseLayer= () =>{
  setOpenLayer(false)
}

  return (
    <>
 <section className='portfolio p-5 position-relative'>
    <div className='container text-center d-flex align-items-center justify-content-center flex-column'>
       <div className='p-2 portfolioText'>
       <h2 className='fs-1'>PORTFOLIO COMPONENT</h2>
        <div className='starPortfolio position-relative text-center'>
        <FontAwesomeIcon icon="fa-solid fa-star" />
        </div>
       </div>
       <div className='images'>
        <div className='row g-4'>

          <div className='col-lg-4 col-md-6' >
          <div className='imgesPortfolio position-relative' onClick={()=>{displayImage(img1)}}>
          <img src={img1} className='w-100 rounded-2'/>
          <div className='imageLayer position-absolute w-100 h-100'>
          <div className=' rounded-2  w-100 h-100 d-flex align-items-center justify-content-center'>
          <FontAwesomeIcon className="text-white fa-6x" icon="fa-solid fa-plus" />
          </div>
          </div>
          </div>
          </div>

          <div className='col-lg-4 col-md-6' >
           <div className='imgesPortfolio position-relative' onClick={()=>{displayImage(img2)}}>
           <img src={img2} className='w-100 rounded-2'/>
           <div className='imageLayer position-absolute w-100 h-100'>
           <div className=' rounded-2  w-100 h-100 d-flex align-items-center justify-content-center'>
          <FontAwesomeIcon className="text-white fa-6x" icon="fa-solid fa-plus" />
          </div>
          </div>
           </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='imgesPortfolio position-relative' onClick={()=>{displayImage(img3)}}>
            <img src={img3} className='w-100 rounded-2'/>
            <div className='imageLayer position-absolute w-100 h-100'>
            <div className='rounded-2  w-100 h-100 d-flex align-items-center justify-content-center'>
          <FontAwesomeIcon className="text-white fa-6x" icon="fa-solid fa-plus" />
          </div>
          </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
          <div className='imgesPortfolio position-relative' onClick={()=>{displayImage(img1)}}>
          <img src={img1} className='w-100 rounded-2'/>
          <div className='imageLayer position-absolute w-100 h-100'>
          <div className='rounded-2  w-100 h-100 d-flex align-items-center justify-content-center'>
          <FontAwesomeIcon className="text-white fa-6x" icon="fa-solid fa-plus" />
          </div>
          </div>
          </div>
          </div>

          <div className='col-lg-4 col-md-6'>
           <div className='imgesPortfolio position-relative' onClick={()=>{displayImage(img2)}}>
           <img src={img2} className='w-100 rounded-2'/>
           <div className='imageLayer position-absolute w-100 h-100'>
           <div className=' rounded-2  w-100 h-100 d-flex align-items-center justify-content-center'>
          <FontAwesomeIcon className="text-white fa-6x" icon="fa-solid fa-plus" />
          </div>
          </div>
           </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='imgesPortfolio position-relative' onClick={()=>{displayImage(img3)}}>
            <img src={img3} className='w-100 rounded-2'/>
            <div className='imageLayer position-absolute w-100 h-100'>
            <div className='rounded-2  w-100 h-100 d-flex align-items-center justify-content-center'>
          <FontAwesomeIcon className="text-white fa-6x" icon="fa-solid fa-plus" />
          </div>
            </div>
          
            </div>
          </div>

        </div>
       </div>
    </div>
    
    {openLayer&&
      <div className='layerOpenImage position-absolute' onClick={()=>{handlecloseLayer()}}>
    <div className='openImage position-absolute'>
      <img src={imageOnClick} className="w-50 rounded-2"/>
     
    </div>
    </div>}
    </section>

    </>
  )
}
