import React from "react";
import Typical from "react-typical";
import { IMGHero, ReactLogo, BootstrapLogo, HtmlLogo, JavascriptLogo, TailwindLogo } from '../../assets'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Hero() {
  return (
    <div className="bg-dark-main font-poppins h-full">
      <div className="container mx-auto px-10 lg:px-20 h-full">
        <div className="flex lg:flex-row flex-col-reverse h-full text-white justify-between items-center rounded-xl shadow-md lg:shadow-none bg-dark-second lg:bg-dark-main p-4 lg:p-0">
          <div className="py-5 w-full lg:w-2/3 text-center lg:text-left">
            <span className="font-semibold text-2xl lg:text-5xl">
                Hi There! 👋 <br/>
                
                <Typical
                steps={["I'm Reva Doni Aprilio", 3000, "I'm", 300]}
                loop={Infinity}
                className="inline-block"
                />
            </span>
            <div className="py-5 text-gray-400 w-full lg:w-3/4 text-lg">
              <p>I'm learning web developing since 2019.</p>
              <p>Hello There, my name is Reva Doni Aprilio and people who's know call me Doni (19). I Live in Bandung, West Java. I am a Telkom University student and majored in Software Engineering.</p>
            </div>
            <div className="py-3">
              <button className="px-3 py-2 bg-transparent focus:outline-none hover:bg-violet-500 border-solid border-2 border-violet-500 rounded-lg transition-all duration-300">
                About
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <LazyLoadImage src={IMGHero} className="" alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
