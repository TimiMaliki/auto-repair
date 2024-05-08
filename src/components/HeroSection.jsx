import React from "react";
// import heroVid from "../assets/hero-img/Main_2.mp4";
import Car from "../assets/hero-img/heroPic.jpg"

const HeroSection = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <img src={Car} alt="whiteCar" />
    </div>
  );
};

export default HeroSection;
