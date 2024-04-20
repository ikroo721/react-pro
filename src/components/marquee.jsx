import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full z-10 py-20 rounded-tr-2xl rounded-tl-2xl  bg-[#004D43]'>

        <div className='text border-t-2 border-b-2 gap-5 border-zinc-300 flex whitespace-nowrap overflow-hidden' >
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:5}} className='text-[15vw] font-semibold mr-20 tracking-tighter leading-none font-["Founder Grotesk " ] uppercase'>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:5}} className='text-[15vw] font-semibold mr-20 tracking-tighter leading-none font-["Founder Grotesk"] uppercase'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee