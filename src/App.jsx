/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Navbar from './components/navbar'
import Landingpage from './components/landingpage'
import Marquee from './components/marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full relative text-white bg-zinc-900' >
       <Navbar></Navbar>
      <Landingpage></Landingpage>

    <Marquee></Marquee>
<About/>
<Eyes/>
<Featured/>
<Cards/>
<Eyes data="Ready To Start the Project" />

    </div>
  )
}

export default App