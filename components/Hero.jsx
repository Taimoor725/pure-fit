"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ScrollEffect from "./ScrollEffect";
import Link from "next/link";

function Hero() {
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 300], [0, -80]);
  const modalY = useTransform(scrollY, [0, 300], [0, 250]);
  const RiseThebar = useTransform(scrollY,[0,1700] , [0,-120])

  return (
    <div className="w-screen h-auto flex flex-col relative">
      {/* upper section */}
      <div className="w-screen h-[120vh] bg-black relative flex justify-start items-center p-5 overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <Image
            src={"/bg_home-hero.jpg"}
            alt="home"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
          />
        </div>

        <motion.div
          style={{ y: textY }}
          className="w-[35vw] flex flex-col gap-2 relative z-10 -translate-y-[2rem]"
        >
          <div
            className="w-full text-2xl font-bold text-white px-1"
            style={{ fontFamily: "var(--font-Open_Sans)" }}
          >
            Our Story
          </div>
          <div className=" [text-shadow:2px_2px_10px_rgba(0,0,0,0.8)] w-full text-[5.5rem] leading-[5rem] font-bold italic text-white" style={{ fontFamily: "var(--font-Oswald)" }}>
            KEEPING YOU STRONG & FIT FOREVER
          </div>
          <div className="w-full h-[2rem] gap-3 text-white hover:text-[#ffff00] flex justify-end items-center">
            <Image
              src={"/icons/right-arrow.svg"}
              alt="right-arrow-icon"
              width={40}
              height={40}
              className="object-cover"
            />
            <div
              className="text-xl font-extrabold cursor-pointer italic"
              style={{ fontFamily: "var(--font-Open_Sans)" }}
            >
              DISCOVER
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: modalY }}
          className="absolute bottom-20 right-5 z-0"
        >
          <Image
            src={"/hero-modal.png"}
            alt="hero-modal"
            width={900}
            height={900}
            className="object-cover w-lg h-lg"
          />
        </motion.div>
      </div>

      {/* lower section */}

      <CardsSection />
      <div className="w-screen h-[80vh] bg-white z-0  overflow-hidden relative">
        <div style={{ fontFamily: "var(--font-Oswald)" }}
          className=" z-[36] text-[9rem] _h-[10rem]  font-extrabold absolute top-1/2 left-1/2 -translate-1/2">
          <motion.div className=" flex flex-col  translate-y-[2.5rem]" style={{y:RiseThebar}}>
            <div className=" flex italic" >
              <span className=" hover:text-white text-white">#</span>
              <Link href={"#"} className=" hover:text-white text-[#ffff00] [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">RISETHEBAR</Link>
            </div>
            <div className="flex _gap-2 items-center">
            <Image src={"/icons/insta.svg"} alt="insta-icon" width={40} height={40} className="w-[1.5rem] _h-[1.5rem] object-cover" />
              <Link href={"#"} className="text-xl text-white hover:text-[#ffff00]" >PUREFIT</Link>
            </div>
          </motion.div>
        </div>
        <ScrollEffect />
      </div>
    </div>
  );
}

export default Hero;


const CardsSection = () => {
  return (
    <div className="w-screen flex justify-center z-20">
      <Cards index={0} zIndex={30} img={"/image1.png"} />
      <Cards index={1} zIndex={32} img={"/image2.jpg"} />
      <Cards index={2} zIndex={30} img={"/image3.jpg"} />
    </div>
  );
};

const Cards = ({ img, zIndex }) => {
  const { scrollY } = useScroll();
  const [isHover, setHover] = useState(null)
  const cardScroll = useTransform(scrollY, [0, 300], [50, -100]);

  return (
    <motion.div
      className="relative text-white italic hover:text-[#ffff00]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        y: cardScroll,
        zIndex: zIndex,
      }}
    >
      <div className="w-[31vw] h-[82vh] shadow-2xl overflow-hidden relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black/20 z-[34]"></div>

        {/* absolute things */}
        <div className="text-6xl  font-bold w-[2rem] absolute top-5 left-5 z-[35] [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">Our Brands</div>
        <div className="flex items-center gap-2 absolute bottom-5 right-5 z-[35] cursor-pointer text-white hover:text-white">
          <Image src={"/icons/right-arrow.svg"} width={40} height={40} alt="arrow-icon-card" className=" object-cover" />
          <div className="text-2xl font-bold">
            DISCOVER
          </div>
        </div>


        <Image
          src={img}
          width={300}
          height={300}
          alt="cards"
          className={`w-full h-full object-cover ${isHover ? "scale-110" : ""} transition-all duration-500`}
        />
      </div>
    </motion.div>
  );
};
