import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/banner'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import ContactUS from './pages/ContactUS'
import Slider from './components/Slider'
import Why from './components/Why'

function App() {
 

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={
          <>
          <Banner/>
          <Slider/>
          <Why/>
          </>
        } />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUS/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
