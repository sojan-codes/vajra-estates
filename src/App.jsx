import React, { use, useEffect, useState } from 'react'
import Header from './Sections/Header'
import About from './Sections/About'
import Project from './Sections/Project'
import Testimonials from './Sections/Testimonials'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import { ToastContainer } from 'react-toastify';
import Animate from './Components/Animate'
import { div } from 'framer-motion/client'
import { AnimatePresence, time } from 'framer-motion'

const App = () => {
  const [showIntro, setShowIntro] = useState(false);
  return (
    <div>
      <AnimatePresence>
        {!showIntro && <Animate onFinish={() => setShowIntro(true)} />}
      </AnimatePresence>
      <Header />
      {showIntro && (
        <div>
          <ToastContainer />
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
