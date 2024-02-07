import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  const [pathName, setPathName]= useState(window.location.pathname)

  
  return( 
 <>
    <nav className="navbar navbar-expand-lg navbar-light py-3 ">
    <div className="container">
      <Link className="navbar-brand text-white fw-bold" to={"/home"}>START FRAMEWORK</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link onClick={()=>{setPathName("/about")}} className={pathName=="/about"?"active rounded-3 nav-link text-white fw-bold":" nav-link text-white fw-bold"} aria-current="page" to={"/about"}>ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link onClick={()=>{setPathName("/portfolio")}} className={pathName=="/portfolio"?"active rounded-3 nav-link text-white fw-bold":" nav-link text-white fw-bold"}  to={"/portfolio"}>PORTFOLIO</Link>
          </li>
          <li className="nav-item">
            <Link onClick={()=>{setPathName("/contact")}} className={pathName=="/contact"?"active rounded-3 nav-link text-white fw-bold":" nav-link text-white fw-bold"}  to={"/contact"}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
      
    )}
    

