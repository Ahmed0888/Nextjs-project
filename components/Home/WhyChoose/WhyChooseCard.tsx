import { Tilt_Neon } from "next/font/google";
import Image from "next/image";
import React from "react";

type props = {
  title: string;
  image: string;
  linkText: string;
};

const WhyChooseCard = ({ image, title, linkText }: props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object_contain mx-auto"
      />
      <h1 className="text-center text-lg mt-5 mb-5 font-semibold text-gray-800 ">
        {title}
      </h1>
      <p className="text-center text-gray-600 font-medium text-sm mb-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor eius
        voluptates facilis, corrupti vitae, voluptatem dolore aperiam
      </p>
      <p className="text-center font-semibold text-blue-900 hover:text-blue-950 transition-all duration-200 cursor-pointer">
        {linkText}
        &#8594;
      </p>
    </div>
  );
};

export default WhyChooseCard;
