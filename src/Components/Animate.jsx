// import { AnimatePresence, time } from 'framer-motion';
import { div } from 'framer-motion/client';
import React, { use, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { motion, AnimatePresence } from 'motion/react'

const IntroAnimate = ({ onFinish }) => {
    const word = ", ज्वजलपा";
    const type = ['', '|'];
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
    const [typeIdx, setTypeIdx] = useState(0);

    useEffect(() => {
        if (phase !== 'greet') return
        if (index < greet.length - 1) {
            const interval = setInterval(() => {
                setIndex(n => n + 1)
            }, 150)
            return () => clearInterval(interval)
        }
        const timeout = setTimeout(() => {
            setPhase('type')
        }, 800)
        return () => clearTimeout(timeout)
    }, [index, phase])

    useEffect(() => {
        if (phase !== 'type') return;
        setTypeIdx(1)
        if (subIndex < word.length) {
            const interval = setInterval(() => {
                setSubIndex(n => n + 1)
            }, 80)
            return () => clearInterval(interval)
        }
        const timeout = setTimeout(() => {
            setVisible(false)
        }, 1200)
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
                    className="fixed inset-0 bg-cover bg-center z-50 overflow-hidden" style={{
                        backgroundImage: `url(${assets.red_bg})`,
                        willChange: "transform",
                        transform: "translateZ(0)",
                    }}>
                    <div className='fixed inset-0 bg-black/40 flex justify-center items-center'>
                        <motion.div className="text-[#FFD700] text-4xl md:text-6xl font-bold"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.12 }}
                        >
                            {`${greet[index]} `}{`${word.substring(0, subIndex)}`}<motion.span className='animate-pulse px-1'
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                            >{type[typeIdx]}</motion.span>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default IntroAnimate
