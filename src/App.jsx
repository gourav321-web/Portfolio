import React from 'react'
import Navbar from './Componants/Navbar/Navbar'
import Hero from './Componants/Hero/Hero'
import About from './Componants/About/About'
import Services from './Componants/Services/Services'
import LatestWork from './Componants/LatestWork/LatestWork'
import Contact from './Componants/Contact/Contact'
import Footer from './Componants/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <LatestWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
