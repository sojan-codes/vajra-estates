// import { AnimatePresence, time } from 'framer-motion';
import { div } from 'framer-motion/client';
import React, { use, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { motion, AnimatePresence } from 'motion/react'

const IntroAnimate = ({ onFinish }) => {
    const word = ", ज्वजलपा";
    const greet = [
        "Hello",
        "Hola",
        "Ciao",
        "Hallo",
        "Привет",
        "السلام علیکم",
        "Salam Walekum",
        "Tashi Delek",
        "प्रणाम",
        "सेवारो",
        "བཀྲ་ཤིས་བདེ་ལེགས",
        "नमस्ते"
    ];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [phase, setPhase] = useState('greet');
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (phase !== 'greet') return
        if (index < greet.length - 1) {
            const interval = setInterval(() => {
                setIndex(n => n + 1)
            }, 120)
            return () => clearInterval(interval)
        }
        const timeout = setTimeout(() => {
            setPhase('type')
        }, 1000)
        return () => clearTimeout(timeout)
    }, [index, phase])

    useEffect(() => {
        if (phase !== 'type') return;
        if (subIndex < word.length) {
            const interval = setInterval(() => {
                setSubIndex(n => n + 1)
            }, 120)
            return () => clearInterval(interval)
        }
        const timeout = setTimeout(() => {
            setVisible(false)
        }, 2000)
        return () => clearTimeout(timeout)
    }, [subIndex, phase])
    return (
        <AnimatePresence onExitComplete={onFinish}>
            {visible && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{
                        y: '-100%',
                        transition: {
                            duration: 1.05,
                            ease: [0.22, 1, 0.36, 1],
                        },
                    }}
                    className="fixed inset-0 bg-cover bg-center z-50 overflow-hidden" style={{ backgroundImage: `url(${assets.red_bg})` }}>
                    <div className='fixed inset-0 bg-black/40 flex justify-center items-center'>
                        <motion.div className="text-[#FFD700] text-4xl md:text-6xl "
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.12 }}
                        >
                            {`${greet[index]}${word.substring(0, subIndex)}`}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default IntroAnimate
