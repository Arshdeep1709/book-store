import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freecourse from './components/Freecourse'

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Banner/>
      <Freecourse/>
      <Footer/>
    </div>
    </>
  )
}

export default App