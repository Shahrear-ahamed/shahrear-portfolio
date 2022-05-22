import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // menu items are here
  const menuItems = (
    <>
      <li className="py-3 text-2xl md:py-0 md:text-base">Home</li>
      <li className="py-3 text-2xl md:py-0 md:text-base">About</li>
      <li className="py-3 text-2xl md:py-0 md:text-base">Skills</li>
      <li className="py-3 text-2xl md:py-0 md:text-base">Work</li>
      <li className="py-3 text-2xl md:py-0 md:text-base">Contact us</li>
    </>
  );
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Site logo" className="w-[50px]" />
      </div>

      {/* menu items are here */}
      <ul className="hidden md:flex">{menuItems}</ul>

      {/* mobile hamburger are here */}
      <div onClick={() => setNav(!nav)} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {menuItems}
      </ul>
    </div>
  );
};

export default Navbar;
