/* eslint-disable react/prop-types */
import React, { useEffect , useState } from 'react'

function Eyes({data}) {
 const [rotate, setrotate] = useState(0)
  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
     let mouseX=e.clientX;
     let mouseY=e.clientY;
     let deltaX = mouseX - window.innerWidth/2;
     let deltaY = mouseY - window.innerWidth/2;
     var angle = Math.atan2(deltaY , deltaX) * (180/Math.PI);
    setrotate(angle - 180);
    })
  })
  return (
    <div className='eyes w-full h-screen overflow-hidden ' >
        <div data-scroll data-scroll-speed="-.7" className='w-full relative h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]' >
         <h1 className='text-[10.5vw] leading-none font-bold uppercase -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center absolute  w-[50vw]  tracking-tighter' >{data}</h1>
          <div className='absolute w-1/2 flex gap-10 items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' >
            <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center' >
              <div className='w-2/3 h-2/3 rounded-full  bg-zinc-900 relative' >
              <div style={{transform : `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-10">
              <div className='w-10 h-10 bg-zinc-100 rounded-full' ></div>
              </div>
              </div>
            </div>
            <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center' >
              <div className='w-2/3 h-2/3 rounded-full  bg-zinc-900 relative' >
              <div style={{transform : `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-10">
              <div className='w-10 h-10 bg-zinc-100 rounded-full' ></div>
              </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Eyes