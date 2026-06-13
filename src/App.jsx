import React from 'react'
import Header from './Sections/Header'
import About from './Sections/About'
import Project from './Sections/Project'
import Testimonials from './Sections/Testimonials'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Header />  
      <About />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
