import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h1 className="text-[50px] md:text-[50px]  text-gray-600 font-bold">
          <span className="text-blue-900">Drive With </span>
          <span className="text-red-700">Your Future</span>
        </h1>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Book the selected car effortlessly, Pay for driving only, Book the Car
          Now
        </h2>
        <button
          className="p-2 mt-5 bg-blue-500 text-white
            px-4 rounded-full 
            hover:scale-105 hover:bg-green-600 transition-all"
        >
          Explore Cars
        </button>
      </div>
      <Image
        src="/hero.png"
        alt="hero"
        width={400}
        height={500}
        className="w-full object-cover align-middle"
      />
    </div>
  );
}

export default Hero;
