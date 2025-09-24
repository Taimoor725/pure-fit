import About from '@/components/About'
import Hero from '@/components/Hero'
import Special from '@/components/Special'
import React from 'react'

function page() {
  return (
    <div className='w-auto flex flex-col h-auto overflow-x-hidden'>
        <Hero/>
       <div className='w-auto h-auto overflow-x-auto about-scroll'>
          <About/>
       </div>
       <Special/>

       <div className='h-[100vh] w-screen bg-white'>

       </div>
    </div>
  )
}

export default page