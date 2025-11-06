import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* Text content */}
          <div>
            {/* Top Box */}
            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white">
              <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
                News
              </div>
              <p className="text-xs sm:text-sm">
                We have updated our terms of service. Read our policy
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-6 mb-6 leading-[3rem] lg:leading-[5rem]">
              Simplify Your Workflow with <span className="text-pink-700">Appify</span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel quo nobis cumque molestiae quod, doloribus vitae ipsum voluptatem molestias. Voluptatibus quod modi voluptate aliquam, ipsam perspiciatis minima similique rem.
            </p>

            {/* Playstore and App Store Images */}
            <div className="flex space-x-4 mt-8 mb-8 items-center">
                <Image
                  src="/images/as.png"
                  alt="App Store"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              <Image
                src="/images/gp.png"
                alt="Play Store"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>

          {/* Image content */}
          <div className="hidden lg:block">
            <img src="/images/hero.png" alt="App preview" width={700} height={700} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
