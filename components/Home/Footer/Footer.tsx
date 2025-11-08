import Link from "next/link";
import React from "react";
import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white py-10 ">
      <div className="w-[90%] mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {/* Logo and Description  */}
          <div>
            {/* Logo */}
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-3xl md:text-4xl text-pink-700">A</span>ppify
            </h1>
            {/* Description */}
            <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600">
              Lorem ipsum dolor sit amet, consectetur ipsum dolor elit,
              consectetur adipisicing amet.
            </p>
          </div>
          {/* About Us Links */}
          <div className="">
            <h3 className="text-lg font-semibold text-gray-800 ">About Us</h3>
            <ul className="mt-4 spac-y-4 text-sm font-semibold text-gray-500">
              <li>Support Center </li>
              <li>Customer Support </li>
              <li>About us </li>
              <li>Copyright</li>
              <li>Popular Campaign</li>
            </ul>
          </div>
          {/* Our Information Links */}
          <div className="">
            <h3 className="text-lg font-semibold text-gray-800 ">
              Our Information{" "}
            </h3>
            <ul className="mt-4 spac-y-4 text-sm font-semibold text-gray-500">
              <li>Return Policy </li>
              <li>Privacy Policy</li>
              <li>Terms & Condition </li>
              <li>Site Map</li>
              <li>Store Hours </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 ">
              Contact Info{" "}
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500 ">
              <li className="flex items-center">
                <FaMapMarkedAlt className="mr-2 text-pink-600" />
                Karach, Sindh, Pakistan
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-pink-600" />
                +92 300 1234567
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2 text-pink-600" />7 Days -8am to 10pm
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-pink-600" />
                mahmed030888@gmail.com
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section  */}
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm ">
            <p className="text-center md:text-left ">© 2025 XYZ. All rights reserved.</p>
            <div className=" flex items-center space-x-4 mt-4 md:mt-0">
                <span >Social:</span>
                <Link className="text-gary-500 hover:text-gray-800" href="#" >
                <FaFacebook/>

                </Link>
                <Link className="text-gary-500 hover:text-gray-800" href="#" ><FaTwitter/></Link>
                <Link className="text-gary-500 hover:text-gray-800" href="#" ><FaInstagram/></Link>
                <Link className="text-gary-500 hover:text-gray-800" href="#" ><FaLinkedin/></Link>
                <Link className="text-gary-500 hover:text-gray-800" href="#" ><FaYoutube/>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
