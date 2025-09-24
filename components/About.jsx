"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [isHover, setHover] = useState(false);

  const positionHandler = (e) => {
    const cursorPos = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - cursorPos.left,
      y: e.clientY - cursorPos.top,
    });
  };

  useEffect(() => {
    let frame;
    const animate = () => {
      setCirclePos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.2,
        y: prev.y + (mousePos.y - prev.y) * 0.2,
      }));
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [mousePos]);

  const cardsData = [
    { img: "/gym/img1.jpg", dis: "HOME GYM" },
    { img: "/gym/img2.jpg", dis: "WEIGHT LIFTING" },
    { img: "/gym/img3.jpg", dis: "TREADMILS" },
    { img: "/gym/img4.jpg", dis: "EXERCISE BIKES" },
    { img: "/gym/img5.jpg", dis: "ROWING MACHINES" },
  ];

  return (
    <div
      className="w-[150vw] h-[75vh] bg-black flex relative overflow-hidden cursor-pointer "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={positionHandler}
    >
      {/* cursor effect */}
      {isHover && (
        <div
          className="z-[12] absolute w-24 h-24 rounded-full pointer-events-none bg-[#ffff00] transition-transform"
          style={{
            left: circlePos.x - 48,
            top: circlePos.y - 48,
          }}
        >
            <div className="w-full h-full relative flex justify-center items-center">
                <Image src={"/icons/arrow-black.svg"} alt="black-arrow" width={40} height={40} className=" object-cover w-[2rem] "/>
                <Image src={"/icons/bg_cursor.svg"} alt="drag-icon" width={200} height={200} className="w-24 h-24 absolute top-0 bottom-0 rotate"/>
            </div>
        </div>
      )}

      {/* cards */}
      {cardsData.map((item, index) => (
        <Card info={item} key={index} />
      ))}
    </div>
  );
}

export default About;

const Card = ({ info }) => {
  return (
    <div className="w-[35rem] h-full relative text-white hover:text-[#ffff00]">
      <div className="absolute top-0 left-0 bg-black/20 z-[10]"></div>
      <Image
        src={info.img}
        alt="gym-images"
        width={500}
        height={500}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 z-[11] text-4xl italic font-bold [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] w-full h-full flex justify-center items-center">
        {info.dis}
      </div>
    </div>
  );
};
