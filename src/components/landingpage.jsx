/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";
function landingpage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className='w-full z-[1] h-screen pt-1 ' >
       <div className="textstructure mt-52 px-20 uppercase">
        {
          ["we create","eye-opening","persentations"].map((item,index)=>{
            // eslint-disable-next-line react/jsx-key
            return <div className="masker   font-['Test Founders Grotesk X-Cnd SmB']">
        <div className='w-fit flex items-center justify-center'>
          {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1], duration:1}}  className='mr-[1vw] bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] bg-cover bg-center w-[9vw] rounded-lg top-2  relative h-[6vw] bg-red-400'></motion.div>)}
        <h1 className='text-[8vw] leading-[6.5vw] tracking-tighter font-semibold'>{item}</h1>
        
          </div>    
          </div>
          })
        }
       </div>
       <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20' >
        {
          ["For public and private companies","From the first pitch to IPO"].map((item ,index)=>{
 // eslint-disable-next-line react/jsx-key
 return           <p className='text-md font-light font-sans tracking-tight leading-none '>{item} </p>
          })
        }
        <div className='start flex items-center gap-5' >
          <div className='px-5 py-2 border-[1px] border-zinc-700 font-light capitalize rounded-full'>Start the Project</div>
          <div className='w-9 flex items-center justify-center rotate-45  h-9 rounded-full border-[1px]'><FaArrowUp /></div>
        </div>
       </div>
    </div>
  )
}

export default landingpage
