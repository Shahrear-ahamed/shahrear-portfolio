import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-dark border-t-2 ">
      <div className="py-5 text-white container mx-auto px-5 flex justify-between items-center border-gray-500">
        <p>&copy; {date} Shahrear ahamed. All rights reserved</p>
        <div>
          <ul className="text-white flex space-x-5 text-3xl">
            <li>
              <a href="https://www.facebook.com/its.shahrear/" target="blank">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="https://github.com/Shahrear-ahamed" target="blank">
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shahrear-ahamed-b0376623b/"
                target="blank"
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
