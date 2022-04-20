import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "react-scroll/modules/components/Link";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#291b24]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#fece6c]">&lt;Hi there!&gt;</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          I am Jitka
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I love to improve people's lives through technology. I am a fan of
          seamless user experience.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fece6c] hover:border-[#fece6c]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

// name="home" (line 6) added for the purpose of React smooth scroll
