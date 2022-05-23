import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen h-full flex items-center  bg-dark"
    >
      {/* container part are here */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hello, my name is</p>
        <h1 className="text-xl sm:text-6xl font-bold text-[#ccd6f6]">
          Shahrear Ahamed
        </h1>
        <h2 className="text-3xl sm:text-7xl font-bold text-[#8892b0]">
          A React JS Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a Front-end developer specializing in building better UX/UI
          concepts. Currently, I’m focused on learning full-stack web
          development.
        </p>
        <div className="flex space-x-8">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link
              to="works"
              smooth={true}
              duration={500}
              className="flex items-center"
            >
              View My Work's
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </Link>
          </button>
          <a
            href="shahrearAhamed.pdf"
            download="Shahrear Ahamed"
            className="text-white group border-0 px-6 py-3 my-2 flex items-center bg-pink-600"
          >
            Download Resume
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
