import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
  const [onInput, setOnInput]= useState('')

const showLabelForm= (thisInput)=>{
setOnInput(thisInput)
}

  return (
    <>
  <section className='contact p-5 position-relative'>
    <div className='container text-center d-flex align-items-center justify-content-center flex-column'>
       <div className='p-2 contactText'>
       <h2 className='fs-1'>CONATCT SECTION</h2>
        <div className='starPortfolio position-relative text-center'>
        <FontAwesomeIcon icon="fa-solid fa-star" />
        </div>
       </div>

       <form className='w-50 text-start'>
       <div className="mb-3">
    <label for="exampleInputName" className={onInput=="userName" ?"d-block form-label":"d-none form-label"}>userName</label>
    <input type="text" placeholder='userName' onKeyUp={()=>{showLabelForm('userName')}} className="shadow-none border-top-0 border-start-0 border-end-0 form-control" id="exampleInputName"/>
  </div>

  <div className="mb-3">
    <label for="exampleInputAge" className={onInput=="userAge" ?"d-block form-label":"d-none form-label"}>userAge</label>
    <input type="text" placeholder='userAge' onKeyUp={()=>{showLabelForm('userAge')}} className="shadow-none border-top-0 border-start-0 border-end-0 form-control" id="exampleInputAge" aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className={onInput=="userEmail" ?"d-block form-label":"d-none form-label"}>userEmail</label>
    <input type="email" placeholder='userEmail' onKeyUp={()=>{showLabelForm('userEmail')}} className="shadow-none border-top-0 border-start-0 border-end-0 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className={onInput=="userPassword" ?"d-block form-label":"d-none form-label"}>userPassword</label>
    <input type="password" onKeyUp={()=>{showLabelForm('userPassword')}} className="shadow-none border-top-0 border-start-0 border-end-0 form-control" id="exampleInputPassword1" placeholder='userPassword'/>
  </div>
  <button type="submit" className="btn">Send Message</button>
</form>
       </div>
       </section>
    </>
  )
}
