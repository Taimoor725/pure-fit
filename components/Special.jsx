"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import {motion ,useScroll ,useTransform} from "framer-motion"

function Special() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end" , "end start"],
    })
    const Move=useTransform(scrollYProgress , [0,1],[0,200] )
    return (
        <div ref={ref} className='w-screen h-screen relative flex flex-col overflow-hidden'>
            <Image className=' object-cove w-full h-full absolute top-0 left-0' src='/bg_home-hero.jpg' width={800} height={800} alt='services' />
            <div className=' text-white px-10 z-[10]  w-full h-[80vh] flex justify-center items-end flex-col'>
                <div className='w-[30rem]  flex flex-col [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]'>
                    <div className='text-2xl font-bold'>PUREFIT</div>
                    <div className=' text-7xl font-bold italic'>
                        PROVIDING <br />
                        A HEALTHIER LIFESTYLE
                    </div>
                </div>
            </div>
            <motion.div style={{x:Move}} className='bottom-[-4rem] left-0 absolute'>
                <Image  src={"/hero.png"} alt='hero' width={1000} height={1000} className=' w-[55rem] h-[32rem] object-cover z-[5]'/>
            </motion.div>
        </div>
    )
}

export default Special