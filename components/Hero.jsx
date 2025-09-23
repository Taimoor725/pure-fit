"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function Hero() {
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 300], [0, -80]);
  const modalY = useTransform(scrollY, [0, 300], [0, 250]);

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
          className="w-[35vw] h-1/2 flex flex-col gap-2 relative z-10"
        >
          <div
            className="w-full text-2xl font-bold text-white px-1"
            style={{ fontFamily: "var(--font-Open_Sans)" }}
          >
            Our Story
          </div>
          <div className="w-full text-8xl font-extrabold italic text-white">
            KEEP YOU FIT FOREVER
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
              className="text-xl font-bold cursor-pointer"
              style={{ fontFamily: "var(--font-Open_Sans)" }}
            >
              Discover More
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

      {/* cards floating OVER hero */}
      <CardsSection />

      {/* lower background */}
      <div className="w-screen h-[80vh] bg-white z-0"></div>
    </div>
  );
}

export default Hero;
const CardsSection = () => {
  return (
    <div className="absolute w-screen top-[90vh] flex justify-center z-20 px-20 _bg-[green] _z-[9999]">
      <div className="flex w-full justify-end _bg-[red]">
        <Cards index={0} zIndex={30} img={"/image1.png"}/>
        <Cards index={1} zIndex={32} img={"/image2.jpg"}/>
        <Cards index={2} zIndex={30} img={"/image3.jpg"}/>
      </div>
    </div>
  );
};

const Cards = ({ index , img  , zIndex}) => {
  const { scrollY } = useScroll();
  const cardScroll = useTransform(scrollY, [0, 300], [50, -20]);

  const offsetX = index * -340;

  return (
    <motion.div
      className={`absolute _bg-black _border-[white] _border-8 _rounded-2xl _shadow-xl`}
      style={{
        y: cardScroll,
        x: offsetX,
        zIndex: zIndex,
      }}
    >
      <div className="w-[32vw] h-[70vh] _rounded-2xl shadow-2xl overflow-hidden" >
        <Image src={img} width={300} height={300} alt="cards" className="w-full h-full object-cover hover:scale-110 overflow-hidden transition-all duration-500"/>
      </div>
    </motion.div>
  );
};
