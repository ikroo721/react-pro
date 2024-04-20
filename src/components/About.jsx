import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='p-20 p w-full rounded-tl-2xl rounded-tr-2xl bg-[#CDEA68] text-black'>
        <h2 className='font-["Neue_Montreal"] tracking-tight text-[4.5vw] leading-[4vw]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h2>
        <div className='w-full flex gap-5 border-t-[2px] pt-10 mt-12 border-[#afc26a]'>
            <div className='w-1/2 ' >
                <h2 className='text-7xl '>Our approach:</h2>
                <button className='px-10 py-5 mt-10 flex items-center gap-6 rounded-full bg-zinc-700 text-white'>Read More
                <div className='w-2 h-2 rounded-full bg-zinc-100' ></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#7f9435]'></div>
        </div>
    </div>
  )
}

export default About