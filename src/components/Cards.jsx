/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react'

function Cards() {
  return (
    <div className='w-full h-[70vh] flex gap-5 items-center justify-evenly   px-20 ' >
   {[{w:"w-[40vw] h-[50vh] bg-red-400", ur:"https://images.unsplash.com/photo-1569229569803-69384f5efa83?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",t:"2019-20"},
   {w:"w-[30vw] h-[50vh] bg-red-400", ur:"https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",t:"RATING 5.0"},
   {w:"h-[50vh] bg-red-400 w-[20vw]",ur:"https://images.unsplash.com/photo-1632636860115-41a0ae878f2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGNhcmR8ZW58MHx8MHx8fDA%3D",t:"BUSINESS"}].map((el , index)=>(
    <div className={`${el.w} relative rounded-xl flex items-end overflow-hidden `} >
<img src={`${el.ur}`} className='w-full h-full object-cover ' alt="" />
<button className='px-5 absolute m-3 py-2 bg-zinc-700 rounded-full'>{el.t}</button>
    </div>
   ))}
    </div>
  )
}

export default Cards