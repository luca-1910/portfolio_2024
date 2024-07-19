import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { BsPersonWorkspace } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Using the Spotlight class using different positioning, colour and styling to create a spotlight in the background of the webpage. */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />
      </div>

      {/* Adding the background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0 ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-{89vw} md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Junior Full Stack Developer
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="The only true wisdom is in knowing you know nothing."
          />
          <p className="text-center">
            Hi, I&#39;m Luca, I&#39;ve recently graduated from my Dioooploma of
            Software Development.{"  "}
          </p>

          <a href="#projects">
            <MagicButton
              title="Show My Work"
              icon={<BsPersonWorkspace />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
