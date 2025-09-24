import React from 'react'
import {motion,useScroll,useTransform} from "framer-motion"
import Image from 'next/image'


function ScrollEffect() {
    const {scrollY} = useScroll()
    const MoveX= useTransform(scrollY , [0,1500] , [0,-670])
  return (
    <motion.div className='flex gap-10 w-[200vw]' style={{x:MoveX}}>
            <ImageCards index={1} img={"/scroll/image1.jpg"}/>
            <ImageCards index={2} img={"/scroll/image3.jpg"}/>
            <ImageCards index={3} img={"/scroll/image2.jpg"}/>
            <ImageCards index={4} img={"/scroll/image1.jpg"}/>
            <ImageCards index={5} img={"/scroll/image3.jpg"}/>


    </motion.div>
  )
}


export default ScrollEffect

const ImageCards=({index , img})=>{
    return(
        <div className='w-[32vw] h-[73vh] flex justify-center items-center'>
        <div className={`${index%2===0 ? "w-[32vw] h-[73vh]" : "w-[20vw] h-[45vh]"} flex justify-center items-center text-6xl text-white  bg-black`}> 
            {/* {index} */}
            <Image src={img} alt='scroll-images' width={500} height={500} className=' object-cover w-full h-full'/>
        </div>
        </div>
    )
}