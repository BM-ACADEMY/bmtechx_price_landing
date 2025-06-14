import React from 'react'
import Navbar from './components/pages/Navbar'
import Home from './components/pages/Home'
import Footer from './components/pages/Footer'
import Services from './components/pages/Services'
import Reviews from './components/pages/Reviews'

export default function App() {
  return (
    <div className='bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png)]'>
      <Navbar/>
      <Home/>
      <Services/>
      <Reviews/>
      <Footer/>
    </div>
  )
}
