import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" h-80 bg-light-blue shadow-xl w-full py-10 px-32 flex flex-col justify-between">
      <div className="flex justify-between items-start gap-20">
        <div className="flex flex-col grow">
          <Logo className="py-10" />
          <div className="flex gap-2 py-2 mt-3">
            <i class="fi fi-sr-phone-flip"></i>
            <p className="hover:underline cursor-pointer">+91 98765 43210</p>
          </div>
          <div className="flex gap-2 py-2">
            <i class="fi fi-sr-envelope"></i>
            <p className="hover:underline cursor-pointer">
              rks@aceacademia.com
            </p>
          </div>
          <div className="flex gap-2 py-2">
            <i class="fi fi-sr-marker"></i>
            <p className="hover:underline cursor-pointer">Mumbai, Maharastra</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">Follow Us</p>
          <div className="flex text-3xl justify-around items-center gap-4 text-gray-700">
            <Link to="/socialmedia">
              <i class="fi fi-brands-instagram hover:text-pink-700"></i>
            </Link>
            <Link to="/socialmedia">
              <i class="fi fi-brands-facebook hover:text-blue-600"></i>
            </Link>
            <Link to="/socialmedia">
              <i class="fi fi-brands-twitter-alt hover:text-black"></i>
            </Link>
            <Link to="/socialmedia">
              <i class="fi fi-brands-linkedin text-3xl hover:text-blue-800"></i>
            </Link>
          </div>
        </div>
        <div className="flex flex-col  gap-4">
          <p className="font-bold">Useful Links</p>
          <Link to="/home" className="hover:underline">
            Home
          </Link>
          <Link to="/courses" className="hover:underline">
            Courses
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
      <div className="a flex justify-center">
        <p className="">&copy; 2024 AceAcademia. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
