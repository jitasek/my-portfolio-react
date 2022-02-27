// Card component = subcomponent of the Portfolio component
import cardImage from "../images/cardimage.jpg";
import { Link } from "react-router-dom";

function Card({ projectName, desc }) {
  return (
    <div>
      <a
        href="/"
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={cardImage}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {projectName}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
          <button className="uppercase mt-5 text-sm font-semibold hover:underline">
            <Link className="text-blue-500 text-[#0096a9] " to="/portfolio">
              check my projects
            </Link>
          </button>
          <button className="uppercase mt-5 text-sm font-semibold hover:underline">
            <Link className="text-blue-500 text-[#0096a9] " to="/portfolio">
              check my projects
            </Link>
          </button>
        </div>
      </a>
    </div>
  );
}

export default Card;
