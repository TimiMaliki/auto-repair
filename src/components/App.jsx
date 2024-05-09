import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Client from './Client'
import Service from './Service'
import UitilineneMore from './UitilineneMore'

const App = () => {
  return (
    <div className='w-full h-full'>
        <HeroSection/>
        <About/>
        <Service/>
        <Client/>
        <UitilineneMore/>

    </div>
  )
}

export default App