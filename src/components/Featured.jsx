import React from 'react'

function Featured() {
  return (
    <div className='w-full  py-20' >
<div className='w-full px-20 border-b-[1px] border-zinc-700 pb-10' >
<h2 className='text-[4vw] font-["Neue Montreal"] tracking-tight'>Featured Projects</h2>

</div>
<div className='px-20'>
<div className="cards w-full mt-10 flex gap-10">
<div className="cardcontainer  w-1/2 h-[80vh] overflow-hidden ">
    <div className="card w-full h-full rounded-xl bg-green-800 overflow-hidden">
      <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1710971228630-f59c4cb257a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
    </div>
</div>
<div className="cardcontainer  w-1/2 h-[80vh]  overflow-hidden ">
    <div className="card w-full h-full rounded-xl bg-green-800 overflow-hidden">
    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1713113667968-550b5a40eee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
</div>
</div>

</div>

    </div>
  )
}

export default Featured