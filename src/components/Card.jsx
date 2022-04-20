import React from "react";

const Card = ({ hrefWeb, hrefGit, cardImg, projectType }) => {
  return (
    <div
      style={{ backgroundImage: `url(${cardImg})` }}
      className="shaddow-lg shaddow-[#040c16] group container rounded-md flex justify-center items-center mx-auto mystyle-div"
    >
      <div>
        {/* Hover effects */}
        <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl block font-bold text-white tracking-wider px-4">
            {projectType}
          </span>
          <div className="pt-8 text-center">
            <a href={hrefWeb}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Demo
              </button>
            </a>
            <a href={hrefGit}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
