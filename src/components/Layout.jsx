import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './shared/footer/Footer';
import Navbar from './shared/navbar/Navbar'


export default function Layout() {
  return (
    <>
  
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
