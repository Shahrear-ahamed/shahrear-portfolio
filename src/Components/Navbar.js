import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import darkLogo from "../assets/dark-logo.png";
import darkName from "../assets/name-dark.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // menu items are here
  const menuItem = ["Home", "About", "Skills", "Works", "Contact"];
  
  return (
    <div className="z-50 sticky top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 md:px-9 lg:px-10">
      <div className="flex items-center">
        <img src={darkLogo} alt="Site logo" className="w-[80px]" />
        <img src={darkName} alt="Site logo" className="w-[200px] ml-[-10px]" />
        {/* <span className="ml-5 text-3xl font-bold">S. Ahamed</span> */}
      </div>

      {/* menu items are here */}
      <ul className="hidden md:flex">
        {menuItem.map((menu, index) => (
          <li key={index}>
            <Link to={menu.toLocaleLowerCase()} smooth={true} duration={500}>
              {menu}
            </Link>
          </li>
        ))}
      </ul>

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
        <ul className="hidden md:flex">
          {menuItem.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Navbar;
