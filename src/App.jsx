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
import { assets } from './assets/assets'

const App = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = assets.red_bg;
    img.onload = () => {
      setReady(true);
    };
  }, []);

  if (!ready) {
    return (
      <div className="h-screen w-screen bg-[#550706] flex items-center justify-center text-white">
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

        </div>
      </div>
    );
  }
  return (
    <div className='overflow-hidden'>
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
