import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen h-full flex items-center bg-dark text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Shahrear Ahamed, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am practicing front-end development with a dedicated, patient,
              and strong knowledge of various technologies. Self-motivated,
              hard-working, and quick learner for the opportunity to develop
              more round skills and improve my workability in a challenging
              environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
