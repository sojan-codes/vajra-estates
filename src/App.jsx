import React, { useState } from 'react'
import Header from './Sections/Header'
import About from './Sections/About'
import Project from './Sections/Project'
import Testimonials from './Sections/Testimonials'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import { ToastContainer } from 'react-toastify';
import Animate from './Components/Animate'
import { div } from 'framer-motion/client'

const App = () => {
  const [step, setStep] = useState(false);
  return (
    <div>
      {!step && <Animate onFinish={() => setStep(true)} />}
      {step && (
        <div>
          <ToastContainer />
          <Header />
          <About />
          <Project />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}

    </div>
  )
}

export default App
